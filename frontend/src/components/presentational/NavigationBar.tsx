import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { SearchBox } from './SearchBox';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }

  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      text-decoration: none;
      color: white;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>
        <Link to="/">TrendyTendies</Link>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link>
          <Link to="/stocks">Stocks</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/profile">Profile</Link>
        </Nav.Link>
      </Nav>
      <SearchBox width={500} />
    </Navbar>
  </Styles>
);