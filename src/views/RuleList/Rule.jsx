import React from 'react';
import {
  makeStyles, Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  listItem: {
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    padding: 10,
  },
}));

const linkRegExp = /([^\S\r\n]\d{3}\.{0,1}[0-9|a-z]{0,3})/i;
const splitRule = (rule) => rule.split(linkRegExp);

const Rule = ({ rule }) => {
  const classes = useStyles();
  const newRule = splitRule(rule);
  return (
    <Typography className={classes.listItem}>
      {newRule.map((part) => (part.match(linkRegExp)
        ? (
          <Link
            key={part}
            to={`/rules/${part.match(/\d\d\d/)}`}
          >
            {part}
          </Link>
        )
        : part))}
    </Typography>
  );
};

Rule.propTypes = {
  rule: PropTypes.string.isRequired,
};

export default Rule;
