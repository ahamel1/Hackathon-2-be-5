import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import Logo from '../logo.png';

const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar expand="md" style={{ backgroundColor: '#5bd1ff' }}>
      <NavbarBrand className="textColorNav" href="/home">
        <img className="mr-3" style={{ width: '3rem' }} src={Logo} alt="pill" />
        Le Nom
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink className="textColorNav" tag={Link} to="/home">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="textColorNav" tag={Link} to="/traitements">
              Traitements
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default MainNav;
