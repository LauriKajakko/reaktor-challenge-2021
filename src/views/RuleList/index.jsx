import React from 'react';
import rulesHooks from '../../hooks/rules';

const { useChaptersRules } = rulesHooks;

const RuleList = () => {
  const chaptersRules = useChaptersRules();
  return (
    <div>
      {chaptersRules && chaptersRules.map((r) => (
        <div key={r}>
          {r}
        </div>
      ))}
    </div>
  );
};

export default RuleList;
