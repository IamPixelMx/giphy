import React from 'react';
import PropTypes from 'prop-types';

import { Navbar } from 'components';

const Layout = ({ children }) => {
  return (
    <main id='main'>
      <Navbar />
      <div className='container'>{children}</div>
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
