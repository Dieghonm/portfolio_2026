import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import '../styles/YouTubeShort.css';

let ytApiPromise = null;
function loadYouTubeApi() {
  if (window.YT && window.YT.Player) return Promise.resolve(window.YT);
  if (ytApiPromise) return ytApiPromise;

  ytApiPromise = new Promise((resolve) => {
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (previous) previous();
      resolve(window.YT);
    };
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(tag);
  });
  return ytApiPromise;
}

const YouTubeShort = forwardRef(function YouTubeShort(
  { videoId, title = 'YouTube video player', onPlay, onPause },
  ref
) {
  const containerRef = useRef(null);
  const playerRef = useRef(null);
  const elementId = useRef(`yt-player-${videoId}-${Math.random().toString(36).slice(2)}`);

  // Permite que o Carousel pause o vídeo de fora (ex: ao clicar em next/prev)
  useImperativeHandle(ref, () => ({
    pause: () => {
      if (playerRef.current && playerRef.current.pauseVideo) {
        playerRef.current.pauseVideo();
      }
    },
  }));

  useEffect(() => {
    let destroyed = false;

    loadYouTubeApi().then((YT) => {
      if (destroyed || !containerRef.current) return;

      playerRef.current = new YT.Player(containerRef.current, {
        videoId,
        playerVars: { rel: 0, modestbranding: 1 },
        events: {
          onStateChange: (event) => {
            if (event.data === YT.PlayerState.PLAYING) {
              onPlay && onPlay();
            } else if (
              event.data === YT.PlayerState.PAUSED ||
              event.data === YT.PlayerState.ENDED
            ) {
              onPause && onPause();
            }
          },
        },
      });
    });

    return () => {
      destroyed = true;
      if (playerRef.current?.destroy) playerRef.current.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId]);

  return (
    <div className="youtube-short-wrapper">
      <div id={elementId.current} ref={containerRef} className="youtube-short-iframe" title={title} />
    </div>
  );
});

export default YouTubeShort;