import React from 'react';
import { StyledNavbar } from './navbar.styled';
import { NavItem } from './components/navItem.styled';

export const Navbar = () => (
  <StyledNavbar>
    <NavItem to="/test1">Test 1</NavItem>
    <NavItem to="/">Acceuil</NavItem>
    <NavItem to="/test2">Test 2</NavItem>
  </StyledNavbar>
);
