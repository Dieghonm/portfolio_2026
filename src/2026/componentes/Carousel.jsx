import React, { useState, useRef, useEffect } from 'react';
import '../styles/Carousel.css';
import YouTubeShort from './YouTubeShort';

function Carousel({ items, itemsPerView = 2, autoPlay = true, interval = 300000 }) {
  if (!items || items.length === 0) return null;

  const canLoop = items.length > itemsPerView;

  const extended = canLoop
    ? [...items.slice(-itemsPerView), ...items, ...items.slice(0, itemsPerView)]
    : items;

  const [index, setIndex] = useState(canLoop ? itemsPerView : 0);
  const [transitionOn, setTransitionOn] = useState(true);
  const timeoutRef = useRef(null);

  const goNext = () => setIndex((prev) => prev + 1);
  const goPrev = () => setIndex((prev) => prev - 1);

  useEffect(() => {
    if (!autoPlay || !canLoop) return;
    timeoutRef.current = setInterval(goNext, interval);
    return () => clearInterval(timeoutRef.current);
  }, [autoPlay, interval, canLoop]);

  useEffect(() => {
    if (!canLoop) return;

    if (index === extended.length - itemsPerView) {
      const t = setTimeout(() => {
        setTransitionOn(false);
        setIndex(itemsPerView);
      }, 500);
      return () => clearTimeout(t);
    }
    if (index === 0) {
      const t = setTimeout(() => {
        setTransitionOn(false);
        setIndex(items.length);
      }, 500);
      return () => clearTimeout(t);
    }
  }, [index, extended.length, itemsPerView, items.length, canLoop]);

  useEffect(() => {
    if (!transitionOn) {
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => setTransitionOn(true));
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [transitionOn]);

  const offset = -(index * (100 / extended.length));

  const renderSlide = (item, i) => {

    if (item.type === 'video') {
      return (
        <YouTubeShort videoId={item.videoId} />
      );
    }
    return (
    <img className="carousel-media" src={item.image} alt={item.alt || ''} />
  );
  };

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
            width: `${(extended.length / itemsPerView) * 100}%`,
          }}
        >
          {extended.map((item, i) => (
            <div
              className="carousel-slide"
              style={{ width: `${100 / extended.length}%` }}
              key={i}
            >
              {renderSlide(item, i)}
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