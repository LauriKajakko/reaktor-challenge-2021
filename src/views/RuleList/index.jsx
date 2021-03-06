import React from 'react';
import {
  CircularProgress,
} from '@material-ui/core';
import { useParams } from 'react-router-dom';
import Rule from './Rule';
import SearchBar from './SearchBar';
import { useChaptersRules } from '../../hooks/rules';
import useSearch from '../../hooks/search';
import Page from '../../components/Page';

const RuleList = () => {
  const { chapter } = useParams();
  const chaptersRules = useChaptersRules();
  const { filter, filteredArray, onChange } = useSearch(chaptersRules);
  return (
    <Page title={`Rules chapter ${chapter}`}>
      <SearchBar filter={filter} onChange={onChange} />
      {filteredArray
        ? filteredArray.map((rule) => <Rule key={rule} rule={rule} />)
        : <CircularProgress />}
    </Page>
  );
};

export default RuleList;
