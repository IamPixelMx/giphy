// use @giphy/js-fetch-api to fetch gifs
import { GiphyFetch } from '@giphy/js-fetch-api';

const key = process.env.REACT_APP_GIPHY_API_KEY || 'sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh';

const giphyFetch = new GiphyFetch(API_KEY);

export default giphyFetch;
