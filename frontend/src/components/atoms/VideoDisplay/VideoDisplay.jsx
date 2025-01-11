import React from 'react'
import './style.css'

const VideoDisplay = ( { link, blind }) => {
  return (
    <video
        className={(blind ? 'hidden' : '') + ' video-player'}
        src={link}
        autoPlay={true}
        controls={false}
    />
  )
}

export default VideoDisplay