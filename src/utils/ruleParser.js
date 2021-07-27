const title = /^\d{1,2}\..+/;

const chapterToArray = (text, chapter) => {
  const regexp = new RegExp(`^${chapter}\\.\\d(\\d|\\.|[a-z]).*`, 'gm');
  const rulesArray = text.match(regexp);
  return rulesArray || [];
};

const firstIndex = (rulesarray) => rulesarray
  .findIndex((line, index, array) => (
    line.match(/^1\.\s.*/)
    && array[index + 1].match(/100\.\s.*/)
    && array[index + 2].match(/100\.1.*/)
  ));

const lastIndex = (rulesarray) => rulesarray
  .reduce((acc, curr, index) => {
    if (!title.test(curr)) return index;
    return acc;
  }, 0);

const tableOfContentsToArray = (text) => {
  const matches = text.match(/(^\d+\..*)/gm);
  const slicedTop = matches.slice(firstIndex(matches));
  const slicedBottom = slicedTop.slice(0, lastIndex(slicedTop));
  return slicedBottom.filter((line) => /(^\d+\.\s.*)/.test(line));
};

export default { chapterToArray, tableOfContentsToArray };
