import React from 'react';
import {
  Box,
  CircularProgress,
  Drawer,
  List,
  makeStyles,
  Typography,
} from '@material-ui/core';
import NavItem from './NavItem';
import rulesHooks from '../../../hooks/rules';

const { useTableOfContents } = rulesHooks;

const useStyles = makeStyles(() => ({
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)',
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const tableOfContents = useTableOfContents();

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.desktopDrawer }}
      open
      variant="persistent"
    >
      <Box
        height="100%"
        display="flex"
        flexDirection="column"
      >
        <Box p={2}>
          { tableOfContents
            ? (
              <List>
                {tableOfContents.map((rule) => (
                  rule.href
                    ? (
                      <NavItem
                        href={rule.href}
                        key={rule.title}
                        title={rule.title}
                      />
                    )
                    : <Typography key={rule.title} variant="h6">{rule.title}</Typography>
                ))}
              </List>
            )
            : <CircularProgress />}
        </Box>
      </Box>
    </Drawer>
  );
};

export default NavBar;
