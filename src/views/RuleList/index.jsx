import React from 'react';
import { TextField, CircularProgress } from '@material-ui/core';
import rulesHooks from '../../hooks/rules';
import searchHooks from '../../hooks/search';

const { useChaptersRules } = rulesHooks;
const { useSearch } = searchHooks;

const RuleList = () => {
  const chaptersRules = useChaptersRules();
  const { filteredArray, onChange } = useSearch(chaptersRules);

  return (
    <div>
      <div>
        <TextField variant="outlined" onChange={onChange} />
      </div>
      {filteredArray
        ? filteredArray.map((r) => (
          <div key={r}>
            {r}
          </div>
        ))
        : <CircularProgress />}
    </div>
  );
};

export default RuleList;
