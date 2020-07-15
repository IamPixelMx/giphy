import React from 'react';
import PropTypes from 'prop-types';
import { Navbar as BootNavbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import { LogoIcon } from 'components';
import './styles.css';

const Navbar = ({ appName, navShortcut, shortcutFunc }) => {
  return (
    <div>
      <BootNavbar color='dark' dark expand='md'>
        <NavbarBrand>
          <img src={LogoIcon} className='navbar-logo' alt='logo' />
          <span>
            <strong>{appName}</strong>
          </span>
        </NavbarBrand>
        <Nav className='ml-3 float-md-right' navbar>
          <NavItem onClick={shortcutFunc}>
            <NavLink>{navShortcut}</NavLink>
          </NavItem>
        </Nav>
      </BootNavbar>
    </div>
  );
};

Navbar.defaultProps = {
  appName: 'GIPHY',
  navShortcut: 'Top Choice',
  shortcutFunc: () => {},
};

Navbar.propTypes = {
  appName: PropTypes.string.isRequired,
  navShortcut: PropTypes.string.isRequired,
  shortcutFunc: PropTypes.func.isRequired,
};

export default Navbar;
