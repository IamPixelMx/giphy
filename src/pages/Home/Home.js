import React from 'react';
import { useSelector } from 'react-redux';
import { GiphyGrid, Layout, SearchInput } from 'components';
import { getTargetData } from 'selectors';

const Home = () => {
  const targetData = useSelector(getTargetData);

  return (
    <Layout>
      <SearchInput />
      {targetData && <GiphyGrid />}
    </Layout>
  );
};

export default Home;
