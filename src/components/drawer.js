import React, { useState } from 'react';
import { Link } from 'gatsby';
import { externalLinks } from '../common/externalLinks';
import { makeStyles } from '@material-ui/core/styles';
import MaterialUiDrawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';

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
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon className="mobile-nav" />
      </Button>
      <MaterialUiDrawer anchor="right" open={isDrawerToggled} onClose={toggleDrawer(false)}>
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
            {getAboutListItems()}
          </List>
        </div>
      </MaterialUiDrawer>
    </>
  );
};

export default Drawer;
