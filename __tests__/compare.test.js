import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path
  .join(__dirname, '..', '__fixtures__', filename);

const readFile = (filename) => fs
  .readFileSync(getFixturePath(filename), 'utf-8');

const file1 = '__fixtures__/file1.json';
const file2 = '__fixtures__/file2.json';
const expectedResult = readFile('expectedResultJson.txt');

test('compare files', () => {
  expect(genDiff(file1, file2)).toBe(expectedResult);
});
