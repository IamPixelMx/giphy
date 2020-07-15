import React from 'react';
import { Layout } from 'components';

const Home = () => {
  return (
    <Layout>
      <p>
        Se adaptó <code>src/App.js</code> para Giphy Engine.
      </p>
      <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
        React Docs
      </a>
    </Layout>
  );
};

export default Home;
