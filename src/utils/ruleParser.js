const chapterToArray = (text, chapter) => {
  const regexp = new RegExp(`\\n${chapter}\\.\\d.*`, 'g');
  const rulesArray = text.match(regexp);
  return rulesArray;
};

const tableOfContentsToArray = (text) => {
  const contentsOneLine = text.match(/(?<=Contents).+?(?=Glossary)/gs)[0];
  const contentsArray = contentsOneLine.match(/(\d{1,3}\..*)/g);
  return contentsArray;
};
export default { chapterToArray, tableOfContentsToArray };
