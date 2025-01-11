import animeApi from './instance'
import animeList from '../assets/data/topanime.json'

const getAnimeThemes = async (limit) => {
    // return {
    //     "name": "Fullmetal Alchemist",
    //     "theme": "OP3",
    //     "link": "https://v.animethemes.moe/FullmetalAlchemist-OP3.webm"
    // }
    const rng = Math.floor(Math.random()*limit);
    const response = await animeApi.getSong(animeList[rng].Title);
    let animeData = response.data.anime[0];
    console.log(animeData)
    
    let themes = animeData.animethemes.filter((x) => !x.slug.includes("-"));
    // Separate ED:
    if(themes.some((x) => x.slug.includes("OP"))){
        themes = themes.filter((x) => !x.slug.includes("ED"));
    }

    console.log(themes);

    let themeIndex = Math.floor(Math.random()*themes.length);

    let anime = {
        "name": animeData.name,
        "theme": themes[themeIndex].slug,
        "link": themes[themeIndex].animethemeentries[0].videos[0].link
    }
    
    return anime;
}

export default getAnimeThemes;