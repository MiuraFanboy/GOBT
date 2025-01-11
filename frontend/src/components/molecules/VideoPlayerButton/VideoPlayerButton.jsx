import React from 'react'
import Button from '@mui/material/Button';
import './style.css'


const VideoPlayerButton = ({ blind, onClick }) => {
    return (
        <Button className={blind ? 'blind-button' : 'next-button'} variant="contained" onClick={onClick}>{blind ? 'REVEAL' : 'NEXT'}</Button>
    )
}

export default VideoPlayerButton