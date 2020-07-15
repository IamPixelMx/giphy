import React from 'react';
import './styles.css';
import { logo } from '../../components';

const Home = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Se adaptó <code>src/App.js</code> para Giphy Engine.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          React Docs
        </a>
      </header>
    </div>
  );
};

export default Home;
