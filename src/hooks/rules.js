import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ruleService from '../services/rules';
import ruleParser from '../utils/ruleParser';

const useTableOfContents = () => {
  const [tableOfContents, setTableOfContents] = useState(null);

  useEffect(() => {
    const fetchRules = async () => {
      const res = await ruleService.getRules();
      setTableOfContents(
        ruleParser
          .tableOfContentsToArray(res)
          .map((rule) => ({
            href: `/rules/${rule.substring(0, 3)}`,
            title: rule,
          })),
      );
    };
    fetchRules();
  }, []);

  return tableOfContents;
};

const useChaptersRules = () => {
  const location = useLocation();
  const { chapter } = useParams();
  const [rules, setRules] = useState(null);
  const [chaptersRules, setChaptersRules] = useState(null);

  const getRules = async () => {
    const arr = rules || await ruleService.getRules();
    setChaptersRules(ruleParser.chapterToArray(arr, chapter));
    if (!rules) setRules(arr);
  };

  useEffect(() => {
    getRules();
  }, [location.pathname]);

  return chaptersRules;
};

export default { useChaptersRules, useTableOfContents };
