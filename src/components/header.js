import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'gatsby';
import { NavDropdown } from 'react-bootstrap';
import { externalLinks } from '../common/externalLinks';
import Drawer from './drawer';
import useDocumentScrollThrottled from '../utils/useDocumentScrolledThrottle';
import ContactUsDialog from './dialogs/contactUsDialog';
import Logo from '../images/basic-credit-icon.png';
import './header.css';

const Header = () => {
  const [headerBG, setHeaderBG] = useState(false);

  useDocumentScrollThrottled((callbackData) => {
    const { currentScrollTop } = callbackData;

    setHeaderBG(currentScrollTop > 2);
  });

  return (
    <header>
      <Navbar
        className="justify-content-between navbar navbar-expand-lg navbar-light bg-white fixed-top"
        fixed="top"
        bg={headerBG ? 'white' : 'transparent'}
        expand="lg"
      >
        <Link to="/">
          <Navbar.Brand>
            <img 
            src={Logo} 
            height="50"
            width="50"
            className="d-inline-block"
            />
            Basic Credit
          </Navbar.Brand>
        </Link>
        <Navbar className="desktop-nav">
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
              <ContactUsDialog isMobile={false} />
              <NavDropdown.Item href="">Work with Us</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav.Link
            className="use-basic-credit-btn btn btn-outline-primary btn-sm"
            size="sm"
            href={externalLinks.basicCreditApp}
          >
            Use Basic Credit
          </Nav.Link>
        </Navbar>
        <Drawer />
      </Navbar>
    </header>
  );
};

export default Header;
