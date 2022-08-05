import ArtworksCSV from '../data/artworks.tsv'
import ArtistCSV from '../data/artist.tsv'
import { shuffle } from 'lodash';
import { slugify } from './helper';

export class DataManager {
    /**
     * Get shuffled Artwork List
     *
     * @static
     * @return {*} 
     * @memberof DataManager
     */
    static getArtworkList() {
        let artworks = ArtworksCSV;
        artworks = artworks.map((artwork) => {
            return slugify(artwork);
        })
        return shuffle(artworks); // randomised
    }

    /**
     * Get Artwork based on slug
     *
     * @static
     * @param {*} slug
     * @return {*} 
     * @memberof DataManager
     */
    static getArtwork(slug) {
        let artworks = DataManager.getArtworkList();

        return  artworks.find((artwork) => {
            return artwork.slug === slug.toLowerCase()
        })
    }

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

