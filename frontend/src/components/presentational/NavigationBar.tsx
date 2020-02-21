import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { SearchBox } from './SearchBox';

export const NavigationBar = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand>TrendyTendies</Navbar.Brand>
    <SearchBox width={500} />
  </Navbar>
);