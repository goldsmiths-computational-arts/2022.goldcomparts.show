
import ArtistCSV from '../data/artists.tsv'
// additional artists is for testing only
import AdditionalArtistCSV from '../data/threeArtists.tsv'
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
        let additionalArtists = AdditionalArtistCSV
        // additional artists is for testing only
        // artists = artists.concat(additionalArtists);
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

