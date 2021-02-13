import React, { useState } from 'react';
import { Link } from 'gatsby';
import { externalLinks } from '../common/externalLinks';
import MaterialUiDrawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import './drawer.css';

const getExternalListItem = ({ link, text }) => (
  <ListItem key={text}>
    <a href={externalLinks[link]}>
      <ListItemText primary={text} />
    </a>
  </ListItem>
);

const getCommunityListItems = () =>
  [
    { link: 'discord', text: 'Discord' },
    { link: 'reddit', text: 'Reddit' },
    { link: 'twitter', text: 'Twitter' },
  ].map((listItemInfo) => getExternalListItem(listItemInfo));

const getAboutListItems = () => {
  const internalLinks = [
    { link: '/documentation', text: 'Documentation' },
    { link: '/', text: 'Work with Us' },
    { link: '/', text: 'Contact Us' },
  ].map((aboutListItemInfo) => (
    <ListItem key={aboutListItemInfo.text}>
      <Link to={aboutListItemInfo.link}>
        <ListItemText primary={aboutListItemInfo.text} />
      </Link>
    </ListItem>
  ));
  const externalLinks = [
    getExternalListItem({ link: 'github', text: 'GitHub' }),
  ];

  return internalLinks.concat(externalLinks);
};

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

const Drawer = () => {
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

  return (
    <>
      <Button className="mobile-nav" onClick={toggleDrawer(true)}>
        <MenuIcon />
      </Button>
      <MaterialUiDrawer
        anchor="right"
        open={isDrawerToggled}
        onClose={toggleDrawer(false)}
      >
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <Link to="/funding" key="Funding-link">
              <ListItem button key="Funding">
                <ListItemText primary="Funding" />
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
            {getAboutListItems()}
          </List>
        </div>
      </MaterialUiDrawer>
    </>
  );
};

export default Drawer;
