
import ArtistCSV from '../data/threeArtists.tsv'
import { shuffle } from 'lodash-es';
import { slugify } from './helper';

export class DataManager {

    /**
     * Get shuffled Artist list
     *
     * @static
     * @return {*} 
     * @memberof DataManager
     */
    static getArtistList() {
        let artists =  ArtistCSV;
        artists = artists.map((artist) => {
            return slugify(artist);
        })
        return shuffle(artists); // randomised
    }

    /**
     * Get artist based on Slug
     *
     * @static
     * @param {*} slug
     * @return {*} 
     * @memberof DataManager
     */
    static getArtist(slug) {
        let artists = DataManager.getArtistList();

        return  artists.find((artist) => {
            return artist.slug === slug.toLowerCase()
        })
    }

}

