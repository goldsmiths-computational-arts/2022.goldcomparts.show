import ArtworksCSV from '../data/artworks.tsv'
import ArtistCSV from '../data/artist.tsv'
import { shuffle } from 'lodash';
import { slugify } from './helper';

export class DataManager {
    static getArtworkList() {
        let artworks = ArtworksCSV;
        artworks = artworks.map((artwork) => {
            return slugify(artwork);
        })
        return shuffle(artworks); // randomised
    }

    static getArtwork(preferredName) {
        let artworks = ArtworksCSV;
        return shuffle(artworks);
    }

    static getArtistList() {
        let artists =  ArtistCSV;
        artists = artists.map((artist) => {
            return slugify(artist);
        })
        return shuffle(artists); // randomised

    }

}

