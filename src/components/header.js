import { Navbar, Nav } from 'react-bootstrap';
import Logo from '../images/gatsby-icon.png';
import { Link } from 'gatsby';
import { externalLinks } from '../common/externalLinks';
import './header.css';
import React from 'react';

const Header = () => {
  return (
    <header>
      <Container fluid>
        <Navbar
          fixed="top"
          bg="dark"
          variant="dark"
          className="justify-content-between"
        >
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
          <Nav>
            <Link to="/funding">
              <Nav.Link as="span">Crowd Funding</Nav.Link>
            </Link>
            <NavDropdown title="Community">
              <NavDropdown.Item href="https://discord.com">
                Discord
              </NavDropdown.Item>
              <NavDropdown.Item href="https://reddit.com">
                Reddit
              </NavDropdown.Item>
              <NavDropdown.Item href="https://twitter.com">
                Twitter
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="About">
              <Link to="/documentation">
                <NavDropdown.Item as="span">Documentation</NavDropdown.Item>
              </Link>
              <NavDropdown.Item href="https://github.com/basiccredit">
                GitHub
              </NavDropdown.Item>
              <NavDropdown.Item href="">Work with Us</NavDropdown.Item>
              <NavDropdown.Item href="">Contact Us</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              className="use-basic-credit-btn btn btn-primary btn-sm"
              variant="primary"
              size="sm"
              href="https://google.com"
            >
              Use Basic Credit
            </Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
