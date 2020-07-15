import React from 'react';
import { giphyFetch } from 'utils';
import { GiphyGrid, Layout, SearchInput } from 'components';

// fetch 10 gifs at a time as the user scrolls (offset is handled by the grid)
const getTrendingGifs = offset => giphyFetch.trending({ offset, limit: 10 });

const Home = () => {
  return (
    <Layout>
      <SearchInput />
      <GiphyGrid fetchGifs={getTrendingGifs} />
    </Layout>
  );
};

export default Home;
