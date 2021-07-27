import { useState, useEffect } from 'react';

const useSearch = (chaptersRules) => {
  const [filter, setFilter] = useState('');
  const [filteredArray, setFilteredArray] = useState([]);

  useEffect(() => {
    const newArray = chaptersRules
      ? chaptersRules
        .filter((item) => item?.toLowerCase()
          .includes(filter.toLowerCase()))
      : [];
    setFilteredArray(newArray);
  }, [chaptersRules]);

  const onChange = (event) => {
    const { value } = event.target;
    setFilter(value);

    const newArray = chaptersRules
      .filter((item) => item?.toLowerCase()
        .includes(value.toLowerCase()));
    setFilteredArray(newArray);
  };

  return {
    filter,
    filteredArray,
    onChange,
  };
};

export default useSearch;
