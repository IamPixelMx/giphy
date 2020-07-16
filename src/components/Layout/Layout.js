import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { Navbar } from 'components';
import { fetchGifs } from 'actions';

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  const shortcutFunc = () => {
    dispatch(fetchGifs({ value: undefined, trending: true }));
  };

  return (
    <React.Fragment>
      <Navbar shortcutFunc={shortcutFunc} />
      <main>{children}</main>
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
