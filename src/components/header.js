import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Logo from '../images/gatsby-icon.png';
import { Link } from 'gatsby';
import { NavDropdown } from 'react-bootstrap';
import { externalLinks } from '../common/externalLinks';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import './header.css';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  listItemLink: {
    textDecoration: 'none',
  },
});

const Header = () => {
  const classes = useStyles();
  const [isDrawerToggled, setIsDrawerToggled] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setIsDrawerToggled(open);
  };

  const getExternalListItem = ({ link, key, text }) => (
    <a href={externalLinks[link]}>
      <ListItem key={key}>
        <ListItemText primary={text} />
      </ListItem>
    </a>
  );

  const getCommunityListItems = () =>
    [
      { link: 'discord', key: 'discord', text: 'Discord' },
      { link: 'reddit', key: 'reddit', text: 'Reddit' },
      { link: 'twitter', key: 'twitter', text: 'Twitter' },
    ].map((listItemInfo) => getExternalListItem(listItemInfo));

  const getAboutListItems = () => {
    const internalLinks = [
      { link: '/documentation', key: 'documentation', text: 'Documentation' },
      { link: '/', key: 'work-with-us', text: 'Work with Us' },
      { link: '/', key: 'contact-us', text: 'Contact Us' },
    ].map((aboutListItemInfo) => (
      <Link to={aboutListItemInfo.link}>
        <ListItem key={aboutListItemInfo.key}>
          <ListItemText primary={aboutListItemInfo.text} />
        </ListItem>
      </Link>
    ));
    const externalLinks = [
      getExternalListItem({ link: 'github', key: 'github', text: 'GitHub' }),
    ];

    return internalLinks.concat(externalLinks);
  };

  const drawerList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <Link to="/funding">
          <ListItem button key={'Funding'}>
            <ListItemText primary={'Funding'} />
          </ListItem>
        </Link>
      </List>
      <List>
        <ListItem key="Community">
          <ListItemText primary="Community" />
        </ListItem>
        {getCommunityListItems()}
      </List>
      <List>
        <ListItem key="About">
          <ListItemText primary="About" />
        </ListItem>
        {/* {getCommunityListItems()} */}
        {getAboutListItems()}
      </List>
    </div>
  );

  return (
    <header>
      <Navbar fixed="top" bg="white" expand="lg">
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
              <NavDropdown.Item href="">Work with Us</NavDropdown.Item>
              <NavDropdown.Item href="">Contact Us</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav.Link
            className="use-basic-credit-btn btn btn-primary btn-sm"
            variant="primary"
            size="sm"
            href={externalLinks.basicCreditApp}
          >
            Use Basic Credit
          </Nav.Link>
        </Navbar>
        <Button onClick={toggleDrawer(true)}>
          <MenuIcon className="mobile-nav" />
        </Button>
        <Drawer
          anchor="right"
          open={isDrawerToggled}
          onClose={toggleDrawer(false)}
        >
          {drawerList()}
        </Drawer>
      </Navbar>
    </header>
  );
};

export default Header;
