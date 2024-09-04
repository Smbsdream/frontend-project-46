import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8').trim();

const cases = [
  {
    filepath1: 'file1.json',
    filepath2: 'file2.json',
    expectedResult: 'expected_stylish.txt',
    format: 'stylish',
    title: 'json json to stylish tree structure',
  },
  {
    filepath1: 'file1.json',
    filepath2: 'file2.json',
    expectedResult: 'expected_plain.txt',
    format: 'plain',
    title: 'json json to plain text',
  },
  {
    filepath1: 'file1.json',
    filepath2: 'file2.json',
    expectedResult: 'expected_json.txt',
    format: 'json',
    title: 'json json to json string',
  },
  {
    filepath1: 'file1.yaml',
    filepath2: 'file2.yml',
    expectedResult: 'expected_stylish.txt',
    format: 'stylish',
    title: 'yaml yml to stylish tree structure',
  },
  {
    filepath1: 'file1.yaml',
    filepath2: 'file2.yml',
    expectedResult: 'expected_plain.txt',
    format: 'plain',
    title: 'yaml yml to plain text',
  },
  {
    filepath1: 'file1.yaml',
    filepath2: 'file2.yml',
    expectedResult: 'expected_json.txt',
    format: 'json',
    title: 'yaml yml to json string',
  },
];

test.each(cases)('Test $title', ({
  filepath1, filepath2, expectedResult, format,
}) => {
  const actual = genDiff(getFixturePath(filepath1), getFixturePath(filepath2), format);
  const expected = readFile(expectedResult);
  expect(actual).toEqual(expected);
});
