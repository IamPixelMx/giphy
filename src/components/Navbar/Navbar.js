import React from 'react';
import PropTypes from 'prop-types';
import { Navbar as BootNavbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import { LogoIcon } from 'components';
import './styles.css';

const Nvabar = props => {
  return (
    <div>
      <BootNavbar color='dark' dark expand='md'>
        <NavbarBrand>
          <img src={LogoIcon} className='navbar-logo' alt='logo' />
          <span>
            <strong>GIPHY</strong>
          </span>
        </NavbarBrand>
        <Nav className='mr-auto' navbar>
          <NavItem>
            <NavLink>Top Choice</NavLink>
          </NavItem>
        </Nav>
      </BootNavbar>
    </div>
  );
};

export default Nvabar;
