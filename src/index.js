import { getExtension, readFile } from './tools.js';
import parseData from './parser.js';
import compareObjects from './compare.js';
import formatData from './formatters/index.js';

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const file1 = readFile(filepath1);
  const file2 = readFile(filepath2);

  const object1 = parseData(file1, getExtension(filepath1));
  const object2 = parseData(file2, getExtension(filepath2));

  const compareData = compareObjects(object1, object2);

  return formatData(compareData, format);
};

export default genDiff;
