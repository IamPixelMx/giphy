import { giphyFetch } from 'utils';

// fetch 10 gifs at a time as the user scrolls (offset is handled by the grid)
export const getTargetGifs = (offset, q) =>
  giphyFetch.trending({ offset, lang: 'es', limit: 10, q: q });

export const getTrendingGifs = offset => giphyFetch.trending({ offset, lang: 'es', limit: 10 });
