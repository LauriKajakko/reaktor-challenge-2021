import { useState, useEffect } from 'react';

const useSearch = (chaptersRules) => {
  const [filter, setFilter] = useState('');
  const [filteredArray, setFilteredArray] = useState([]);

  useEffect(() => {
    setFilteredArray(chaptersRules.filter((item) => item.includes(filter)));
  }, [chaptersRules]);

  const onChange = (event) => {
    const { value } = event.target;
    setFilter(value);
    setFilteredArray(chaptersRules.filter((item) => item.includes(value)));
  };

  return {
    filter,
    filteredArray,
    onChange,
  };
};

export default { useSearch };
