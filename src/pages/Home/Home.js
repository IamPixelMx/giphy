import React from 'react';
import { GiphyGrid, Layout, SearchInput } from 'components';

const Home = () => {
  return (
    <Layout>
      <SearchInput />
      <GiphyGrid trending />
    </Layout>
  );
};

export default Home;
