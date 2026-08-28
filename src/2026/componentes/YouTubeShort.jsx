import React from 'react';
import '../styles/YouTubeShort.css';

function YouTubeShort({ videoId, title = 'YouTube video player' }) {
  return (
    <div className="youtube-short-wrapper">
      <iframe
        className="youtube-short-iframe"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}

export default YouTubeShort;