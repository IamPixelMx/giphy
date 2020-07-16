import { giphyFetch } from 'utils';

// fetch 10 gifs at a time as the user scrolls (offset is handled by the grid)
export const getTargetGifs = async (q, offset) =>
  await giphyFetch.search(q, { offset, lang: 'es', limit: 10 });

export const getTrendingGifs = async offset =>
  await giphyFetch.trending({ offset, lang: 'es', limit: 10 });
