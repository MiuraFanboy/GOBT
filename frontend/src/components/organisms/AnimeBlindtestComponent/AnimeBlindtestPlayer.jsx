import React, { Suspense, useEffect, useState } from 'react'
import VideoPlayerWrapper from '../../molecules/VideoPlayerWrapper/VideoPlayerWrapper';
import getAnimeThemes from '../../../services/getAnimeTheme';
import './style.css'
import { useQuery } from '@tanstack/react-query';
import VideoPlayerButton from '../../molecules/VideoPlayerButton/VideoPlayerButton';

const AnimeBlindtestPlayer = () => {
    const [blind, setBlind] = useState(true);

    const {data: anime, isLoading, isError, refetch: refetchAnime} = useQuery({
        queryKey: ['anime'], // Clé unique pour identifier cette requête
        queryFn: async () => {
            const data = await getAnimeThemes(100);
            console.log(data);
            return data;
        }, // Appel à ton service
        refetchOnWindowFocus: false, // Désactive le refetch automatique au focus
    });

    const handleClick = () => {
        if(!blind){
            refetchAnime()
            setBlind(true)
        }else{
            setBlind(false)
        }
    }

    // Gestion des états de chargement et d'erreur
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Erreur lors du chargement des données.</div>;
    return (
        
        <>
            <VideoPlayerWrapper {...{anime}} blind={blind} />
            <VideoPlayerButton blind={blind} onClick={handleClick} />
        </>

    )
}

export default AnimeBlindtestPlayer