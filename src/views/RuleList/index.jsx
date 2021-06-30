import React from 'react';
import {
  CircularProgress,
} from '@material-ui/core';
import Rule from './Rule';
import SearchBar from './SearchBar';
import rulesHooks from '../../hooks/rules';
import searchHooks from '../../hooks/search';

const { useChaptersRules } = rulesHooks;
const { useSearch } = searchHooks;

const RuleList = () => {
  const chaptersRules = useChaptersRules();
  const { filter, filteredArray, onChange } = useSearch(chaptersRules);
  return (
    <div>
      <SearchBar filter={filter} onChange={onChange} />
      {filteredArray
        ? filteredArray.map((rule) => <Rule key={rule} rule={rule} />)
        : <CircularProgress />}
    </div>
  );
};

export default RuleList;
