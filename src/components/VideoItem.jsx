import React from 'react';
import './VideoItem.css';

export const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className='video-item item'>
      <img
        className='ui image'
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className='content'>
        <div className='header'>{video.snippet.title}</div>
      </div>
    </div>
  );
};

// we pass the props video and onVideoSelect down till here from App component (props drilling). We comunicate back to the App component with the callback onClick={() => onVideoSelect(video)}. (Props can go only down, not up)
