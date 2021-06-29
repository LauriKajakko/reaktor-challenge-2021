import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button,
  ListItem,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightMedium,
    justifyContent: 'flex-start',
    letterSpacing: 0,
    textTransform: 'none',
    width: '100%',
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  title: {
    marginRight: 'auto',
  },
  active: {
    color: theme.palette.primary.main,
    '& $title': {
      fontWeight: theme.typography.fontWeightMedium,
    },
  },
}));

const NavItem = ({
  href,
  title,
}) => {
  const classes = useStyles();

  return (
    <ListItem
      className={classes.item}
      disableGutters
    >
      <Button
        activeClassName={classes.active}
        className={classes.button}
        component={RouterLink}
        to={href}
      >
        <span className={classes.title}>
          {title}
        </span>
      </Button>
    </ListItem>
  );
};

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NavItem;
