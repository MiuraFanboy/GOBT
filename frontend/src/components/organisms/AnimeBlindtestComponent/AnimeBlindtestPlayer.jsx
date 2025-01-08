import React, { Suspense, useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import VideoPlayerWrapper from '../../molecules/VideoPlayerWrapper/VideoPlayerWrapper';
import getAnimeThemes from '../../../services/getAnimeTheme';
import './style.css'

const AnimeBlindtestPlayer = () => {
    const [anime, setAnime] = useState();
    const [blind, setBlind] = useState(true);

    const fetchAnime = async () => {
        setAnime(undefined)
        const data = await getAnimeThemes(100);  // Fetching data asynchronously
        console.log(data)
        setAnime(data);  // Updating state once the data is fetched

    };

    useEffect(()=>{
        fetchAnime();
    }, [])

    const handleNext = async () => {
        fetchAnime()
        setBlind(true)
    }
    const showAnswer = () => {
        setBlind(false)
    }

    return (
        
        <>
            {anime === undefined ? (
                <div>Loading...</div>
            ) : (
                <>
                    <VideoPlayerWrapper {...{anime}} blind={blind} />
                    {blind ? (
                        <Button onClick={showAnswer} variant="contained">REVEAL</Button>
                    ) : (
                        <Button onClick={handleNext} variant="contained">NEXT</Button>
                    )}
                </>
            )}
        </>
    )
}

export default AnimeBlindtestPlayer