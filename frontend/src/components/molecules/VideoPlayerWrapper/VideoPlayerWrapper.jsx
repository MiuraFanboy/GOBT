import React from 'react'
import VideoDisplay from '../../atoms/VideoDisplay/VideoDisplay'
import './style.css'

const VideoPlayerWrapper = ({ anime, blind }) => {
  return (
    <div className='video-wrapper'>  

          <h1 className={blind ? 'hidden' : ''}>{anime.name} - {anime.theme}</h1>

         
          <VideoDisplay link={anime.link} blind={blind}/>
         
    </div>
  )
}

export default VideoPlayerWrapper