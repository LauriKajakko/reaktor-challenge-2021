import React from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

const SearchBar = ({ filter, onChange }) => (
  <div>
    <TextField
      value={filter}
      variant="outlined"
      onChange={onChange}
      placeholder="Search"
    />
  </div>
);

SearchBar.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
