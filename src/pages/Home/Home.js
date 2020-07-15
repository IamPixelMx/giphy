import React from 'react';
import { Layout, SearchInput } from 'components';

const Home = () => {
  return (
    <Layout>
      <div className='row'>
        <div className='col align-self-center'>
          <SearchInput />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
