import fs from 'fs';
import path from 'path';

const getExtension = (fileName) => path.extname(fileName).slice(1);

const getAbsolutePath = (fileName) => path.resolve(process.cwd(), fileName);

const readFile = (fileName) =>
  fs.readFileSync(getAbsolutePath(fileName), 'utf8');

export { getExtension, readFile };
