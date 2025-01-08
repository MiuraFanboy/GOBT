import React from 'react'

const VideoDisplay = ( { link, blind }) => {
  return (
    <video
        src={link}
        autoPlay={true}
        controls={false}
    />
  )
}

export default VideoDisplay