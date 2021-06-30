import React from 'react';
import {
  TextField, CircularProgress, makeStyles,
} from '@material-ui/core';
import Rule from './Rule';
import rulesHooks from '../../hooks/rules';
import searchHooks from '../../hooks/search';

const { useChaptersRules } = rulesHooks;
const { useSearch } = searchHooks;

const useStyles = makeStyles(() => ({
  listItem: {},
}));

const RuleList = () => {
  const classes = useStyles();
  const chaptersRules = useChaptersRules();
  const { filter, filteredArray, onChange } = useSearch(chaptersRules);
  return (
    <div>
      <div>
        <TextField value={filter} variant="outlined" onChange={onChange} />
      </div>
      {filteredArray
        ? filteredArray.map((rule) => (
          <div
            key={rule}
            className={classes.listItem}
          >
            <Rule rule={rule} />
          </div>
        ))
        : <CircularProgress />}
    </div>
  );
};

export default RuleList;
