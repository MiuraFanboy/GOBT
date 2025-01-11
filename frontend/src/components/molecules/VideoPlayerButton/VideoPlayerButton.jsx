import React from 'react'
import Button from '@mui/material/Button';


const VideoPlayerButton = ({ blind, onClick }) => {
    return (
        <Button variant="contained" onClick={onClick}>{blind ? 'REVEAL' : 'NEXT'}</Button>
    )
}

export default VideoPlayerButton