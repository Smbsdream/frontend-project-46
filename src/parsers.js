import YAML from 'js-yaml';

const parseData = (data, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(data);
    case 'yml':
    case 'yaml':
      return YAML.load(data);
    default:
      throw new Error('no extention');
  }
};

export default parseData;
