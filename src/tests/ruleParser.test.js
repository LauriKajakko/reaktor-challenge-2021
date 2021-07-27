import ruleParser from '../utils/ruleParser';

const fs = require('fs');
const path = require('path');

describe('Original file', () => {
  test('table of contents has all rules', () => {

  });
});

describe('Sample file 1', () => {
  const file = path.join(__dirname, './examples/', 'testrules_1.txt');
  const text = fs.readFileSync(file, 'utf8', (err, data) => data);

  test('has right amount of chapters and titles', async () => {
    const result = ruleParser.tableOfContentsToArray(text);
    console.log(result);
    expect(result.length).toBe(6);
    expect(result
      .filter((line) => parseInt(line, 10) < 100)
      .length).toBe(2);
  });

  test('has right amount of rules', async () => {
    expect(ruleParser.chapterToArray(text, 100).length).toBe(1);
    expect(ruleParser.chapterToArray(text, 101).length).toBe(3);
    expect(ruleParser.chapterToArray(text, 102).length).toBe(2);
    expect(ruleParser.chapterToArray(text, 200).length).toBe(4);
  });
});

describe('Sample file 2', () => {
  const file = path.join(__dirname, './examples/', 'testrules_2.txt');
  const text = fs.readFileSync(file, 'utf8', (err, data) => data);

  test('has right amount of chapters and titles', async () => {
    const result = ruleParser.tableOfContentsToArray(text);
    expect(result.length).toBe(10);
    expect(result
      .filter((line) => parseInt(line, 10) < 100)
      .length).toBe(4);
  });

  test('has right amount of rules', async () => {
    expect(ruleParser.chapterToArray(text, 100).length).toBe(1);
    expect(ruleParser.chapterToArray(text, 101).length).toBe(1);
    expect(ruleParser.chapterToArray(text, 200).length).toBe(1);
    expect(ruleParser.chapterToArray(text, 201).length).toBe(1);
    expect(ruleParser.chapterToArray(text, 300).length).toBe(1);
  });
});
