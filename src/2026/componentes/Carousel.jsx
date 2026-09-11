import React, { useState, useRef, useEffect, useMemo } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
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

  // Trava para ignorar cliques repetidos enquanto uma transição está em andamento.
  // É isso que evita o índice "passar" do array e sumir com as imagens.
  const isAnimatingRef = useRef(false);

  const stopActiveVideo = () => {
    if (activeVideoRef.current && activeVideoRef.current.pause) {
      activeVideoRef.current.pause();
    }
    activeVideoRef.current = null;
    setVideoPlaying(false);
  };

  const goNext = () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    stopActiveVideo();
    setIndex((prev) => prev + 1);
  };

  const goPrev = () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    stopActiveVideo();
    setIndex((prev) => prev - 1);
  };

  // Libera a trava quando a transição CSS realmente termina de animar.
  const handleTrackTransitionEnd = () => {
    if (transitionOn) {
      isAnimatingRef.current = false;
    }
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
        // Esse salto é instantâneo (sem transição), então onTransitionEnd
        // não dispara aqui — liberamos a trava manualmente.
        isAnimatingRef.current = false;
      }, 500);
      return () => clearTimeout(t);
    }
    if (index === 0) {
      const t = setTimeout(() => {
        setTransitionOn(false);
        setIndex(slides.length);
        isAnimatingRef.current = false;
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
        <button className="carousel-btn prev" onClick={goPrev} aria-label="Anterior">
          <FaChevronLeft />
        </button>
      )}

      <div className="carousel-viewport">
        <div
          className="carousel-track"
          onTransitionEnd={handleTrackTransitionEnd}
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
        <button className="carousel-btn next" onClick={goNext} aria-label="Próximo">
          <FaChevronRight />
        </button>
      )}
    </div>
  );
}

export default Carousel;