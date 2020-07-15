import React from 'react';
import PropTypes from 'prop-types';

import { Navbar } from 'components';

const Layout = ({ children }) => {
  return (
    <main id='main'>
      <Navbar />
      {children}
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;