import React, { useState, useEffect } from 'react';
import {
  Box,
  CircularProgress,
  Drawer,
  List,
  makeStyles,
} from '@material-ui/core';
import ruleService from '../../../services/rules';
import ruleParser from '../../../utils/ruleParser';
import NavItem from './NavItem';

const useStyles = makeStyles(() => ({
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)',
  },
}));

const NavBar = () => {
  const classes = useStyles();

  const [rules, setRules] = useState(null);

  useEffect(() => {
    const fetchRules = async () => {
      const res = await ruleService.getRules();
      setRules(
        ruleParser
          .tableOfContentsToArray(res)
          .map((rule) => ({
            href: `/${rule}`,
            title: rule,
          })),
      );
    };
    fetchRules();
  }, []);

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box p={2}>
        { rules
          ? (
            <List>
              {rules.map((rule) => (
                <NavItem
                  href={rule.href}
                  key={rule.title}
                  title={rule.title}
                />
              ))}
            </List>
          )
          : <CircularProgress />}
      </Box>
    </Box>
  );

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.desktopDrawer }}
      open
      variant="persistent"
    >
      {content}
    </Drawer>
  );
};

export default NavBar;
