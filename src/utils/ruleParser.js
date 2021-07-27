const title = /^\d{1,2}\..+/;
const firstTitle = /^1\.\s.*/;
const firstChapter = /100\.\s.*/;
const firstRule = /100\.1.*/;

const startsRulesList = (line, index, array) => (
  firstTitle.test(line)
  && firstChapter.test(array[index + 1])
  && firstRule.test(array[index + 2])
);

const tableOfContentsToArray = (text) => {
  const firstIndex = (rulesarray) => rulesarray.findIndex(startsRulesList);

  const lastIndex = (rulesarray) => rulesarray
    .reduce((acc, curr, index) => (!title.test(curr) ? index : acc), 0);

  const enumeratedLines = text.match(/(^\d+\..*)/gm);
  return enumeratedLines
    .slice(firstIndex(enumeratedLines), lastIndex(enumeratedLines))
    .filter((line) => /(^\d+\.\s.*)/.test(line));
};

const chapterToArray = (text, chapter) => {
  const rule = new RegExp(`^${chapter}\\.\\d(\\d|\\.|[a-z]).*`, 'gm');
  const rulesArray = text.match(rule);
  return rulesArray || [];
};

export default { chapterToArray, tableOfContentsToArray };
