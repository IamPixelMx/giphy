// use @giphy/js-fetch-api to fetch gifs
import { GiphyFetch } from '@giphy/js-fetch-api';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const giphyFetch = new GiphyFetch(API_KEY);

export default giphyFetch;
