import { getExtension, readFile } from './tools.js';
import parseData from './parsers.js';
import compareObjects from './compare.js';

const genDiff = (filepath1, filepath2) => {
  const file1 = readFile(filepath1);
  const file2 = readFile(filepath2);

  const object1 = parseData(file1, getExtension(filepath1));
  const object2 = parseData(file2, getExtension(filepath2));

  const compare = compareObjects(object1, object2);

  return compare;
};

export default genDiff;
