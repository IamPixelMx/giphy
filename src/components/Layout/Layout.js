import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { fetchGifs } from 'actions';
import { Navbar } from 'components';

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
