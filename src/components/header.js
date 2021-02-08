import { Navbar, Nav } from 'react-bootstrap';
import Logo from '../images/gatsby-icon.png';
import { Link } from 'gatsby';
import { Container } from 'react-bootstrap';
import React from 'react';

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Link to="/">
            <Navbar.Brand>
              <img
                alt=""
                src={Logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              Basic Credit
            </Navbar.Brand>
          </Link>
          <Nav className="justify-content-end">
            <Link to="/faq">
              <Nav.Link as="span">FAQ</Nav.Link>
            </Link>
            <Link to="/about">
              <Nav.Link as="span">About</Nav.Link>
            </Link>
            <Link to="/app">
              <Nav.Link as="span">Use Basic Credit</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
