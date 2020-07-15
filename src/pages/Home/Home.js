import React from 'react';
import { Layout, Loader, SearchInput } from 'components';

const Home = () => {
  return (
    <Layout>
      <SearchInput />
      <Loader />
    </Layout>
  );
};

export default Home;
