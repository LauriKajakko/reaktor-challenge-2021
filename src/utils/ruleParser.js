const chapterToArray = (text, chapter) => {
  const nextChapter = (parseInt(chapter.match(/\d\d\d/), 10) + 100).toString();
  const rulesOneLine = text.match(new RegExp(`${chapter}\n\n.+?(?=${nextChapter})`), 'gs')[0];
  const rulesArray = rulesOneLine.match(/(\d\d\d\..\s*)/g);
  return rulesArray;
};

const tableOfContentsToArray = (text) => {
  const contentsOneLine = text.match(/(?<=Contents).+?(?=Glossary)/gs)[0];
  const contentsArray = contentsOneLine.match(/(\d\d\d\..*)/g);
  return contentsArray;
};
export default { chapterToArray, tableOfContentsToArray };
