import React, { useState, useRef, useEffect, useMemo } from 'react';
import '../styles/Carousel.css';
import YouTubeShort from './YouTubeShort';

function buildSlides(items) {
  const slides = [];
  let mobileBuffer = [];

  const flushBuffer = () => {
    for (let i = 0; i < mobileBuffer.length; i += 2) {
      slides.push(mobileBuffer.slice(i, i + 2));
    }
    mobileBuffer = [];
  };

  items.forEach((item) => {
    if (item.type === 'image' && item.format === 'mobile') {
      mobileBuffer.push(item);
    } else {
      flushBuffer();
      slides.push([item]);
    }
  });
  flushBuffer();

  return slides;
}

function VideoSlot({ videoId, onPlay, onPause }) {
  const ref = useRef(null);
  return (
    <YouTubeShort
      ref={ref}
      videoId={videoId}
      onPlay={() => onPlay(ref.current)}
      onPause={onPause}
    />
  );
}

function Carousel({ items, autoPlay = true, interval = 300000 }) {
  const slides = useMemo(() => buildSlides(items || []), [items]);
  const canLoop = slides.length > 1;

  const extended = canLoop
    ? [slides[slides.length - 1], ...slides, slides[0]]
    : slides;

  const [index, setIndex] = useState(canLoop ? 1 : 0);
  const [transitionOn, setTransitionOn] = useState(true);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const timeoutRef = useRef(null);
  const activeVideoRef = useRef(null);

  const stopActiveVideo = () => {
    if (activeVideoRef.current && activeVideoRef.current.pause) {
      activeVideoRef.current.pause();
    }
    activeVideoRef.current = null;
    setVideoPlaying(false);
  };

  const goNext = () => {
    stopActiveVideo();
    setIndex((prev) => prev + 1);
  };

  const goPrev = () => {
    stopActiveVideo();
    setIndex((prev) => prev - 1);
  };

  useEffect(() => {
    if (!autoPlay || !canLoop || videoPlaying) return;
    timeoutRef.current = setInterval(goNext, interval);
    return () => clearInterval(timeoutRef.current);
  }, [autoPlay, interval, canLoop, videoPlaying]);

  useEffect(() => {
    if (!canLoop) return;

    if (index === extended.length - 1) {
      const t = setTimeout(() => {
        setTransitionOn(false);
        setIndex(1);
      }, 500);
      return () => clearTimeout(t);
    }
    if (index === 0) {
      const t = setTimeout(() => {
        setTransitionOn(false);
        setIndex(slides.length);
      }, 500);
      return () => clearTimeout(t);
    }
  }, [index, extended.length, slides.length, canLoop]);

  useEffect(() => {
    if (!transitionOn) {
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => setTransitionOn(true));
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [transitionOn]);

  if (!slides.length) return null;

  const offset = -(index * (100 / extended.length));

  const handleVideoPlay = (ref) => {
    activeVideoRef.current = ref;
    setVideoPlaying(true);
  };

  const handleVideoPause = () => {
    activeVideoRef.current = null;
    setVideoPlaying(false);
  };

  const renderSlide = (slideItems, slideKey) => (
    <div className={`carousel-slide-group ${slideItems.length > 1 ? 'is-pair' : 'is-single'}`}>
      {slideItems.map((item, i) =>
        item.type === 'video' ? (
          <VideoSlot
            key={`${slideKey}-video-${i}`}
            videoId={item.videoId}
            onPlay={handleVideoPlay}
            onPause={handleVideoPause}
          />
        ) : (
          <img
            key={`${slideKey}-img-${i}`}
            className={`carousel-media format-${item.format || 'mobile'}`}
            src={item.image}
            alt={item.alt || ''}
          />
        )
      )}
    </div>
  );

  return (
    <div className="carousel">
      {canLoop && (
        <button className="carousel-btn prev" onClick={goPrev} aria-label="Anterior">‹</button>
      )}

      <div className="carousel-viewport">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(${offset}%)`,
            transition: transitionOn ? 'transform 0.5s ease' : 'none',
            width: `${extended.length * 100}%`,
          }}
        >
          {extended.map((slideItems, i) => (
            <div
              className="carousel-slide"
              style={{ width: `${100 / extended.length}%` }}
              key={i}
            >
              {renderSlide(slideItems, i)}
            </div>
          ))}
        </div>
      </div>

      {canLoop && (
        <button className="carousel-btn next" onClick={goNext} aria-label="Próximo">›</button>
      )}
    </div>
  );
}

export default Carousel;