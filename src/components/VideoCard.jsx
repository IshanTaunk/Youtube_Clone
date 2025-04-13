import React from 'react'
import './VideoCard.css';

const VideoCard = ({info}) => {
    const {snippet,statistics} = info;
    const {channelTitle,title,thumbnails} = snippet;

  return (
    <div className='video-card-container'>
        <img src={thumbnails.high.url} className='thumb-image' />
        <div className='video-title'><p>{title}</p></div>
        <div>{channelTitle}</div>
        <div>{statistics.viewCount} views</div>
    </div>
  )
}

export default VideoCard