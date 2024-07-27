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

const filepath1 = getFixturePath('file1.json');
const filepath2 = getFixturePath('file2.json');
const filepath3 = getFixturePath('file1.yaml');
const filepath4 = getFixturePath('file2.yml');

const expectedResult = readFile('expectedResultJson.txt');

test('compare files', () => {
  expect(genDiff(filepath1, filepath2)).toBe(expectedResult);
  expect(genDiff(filepath3, filepath4)).toBe(expectedResult);
});
