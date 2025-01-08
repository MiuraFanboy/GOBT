import React from 'react'
import VideoDisplay from '../../atoms/VideoDisplay/VideoDisplay'
import { use } from 'react'

const VideoPlayerWrapper = ({ anime, blind }) => {
  return (
    <>  
        {!blind && (
          <h1>{anime.name} - {anime.theme}</h1>
        )}
         
          <VideoDisplay link={anime.link} blind={blind}/>
         
    </>
  )
}

export default VideoPlayerWrapper