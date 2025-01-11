import axios from 'axios';


class AnimeApi {
    constructor() {
        this.api = axios.create({
            baseURL: "https://api.animethemes.moe/"
        });
    }

    getSong(animeName) {
        // animeName = animeName.split(" ").join("_");
        return this.api.get(`anime?q=${animeName}&include=animethemes.animethemeentries.videos`);
    }
}

export default new AnimeApi();

