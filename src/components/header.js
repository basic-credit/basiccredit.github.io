import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Logo from '../images/gatsby-icon.png';
import { Link } from 'gatsby';
import { NavDropdown } from 'react-bootstrap';
import { externalLinks } from '../common/externalLinks';
import './header.css';

const Header = () => {
  return (
    <header>
      <Navbar fixed="top" bg="transparent" expand="lg">
        <Link to="/">
          <Navbar.Brand>
            <img
              alt="Basic Credit logo"
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Basic Credit
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Link to="/funding">
              <Nav.Link as="span">Crowd Funding</Nav.Link>
            </Link>
            <NavDropdown title="Community">
              <NavDropdown.Item href={externalLinks.discord}>
                Discord
              </NavDropdown.Item>
              <NavDropdown.Item href={externalLinks.reddit}>
                Reddit
              </NavDropdown.Item>
              <NavDropdown.Item href={externalLinks.twitter}>
                Twitter
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="About">
              <Link to="/documentation">
                <NavDropdown.Item as="span">Documentation</NavDropdown.Item>
              </Link>
              <NavDropdown.Item href={externalLinks.github}>
                GitHub
              </NavDropdown.Item>
              <NavDropdown.Item href="">Work with Us</NavDropdown.Item>
              <NavDropdown.Item href="">Contact Us</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link
          className="use-basic-credit-btn btn btn-primary btn-sm"
          variant="primary"
          size="sm"
          href={externalLinks.basicCreditApp}
        >
          Use Basic Credit
        </Nav.Link>
      </Navbar>
    </header>
  );
};

export default Header;
