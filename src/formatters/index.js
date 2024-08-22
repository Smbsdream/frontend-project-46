import makeStylish from './stylish.js';

const formatData = (data, format) => {
  switch (format) {
    case 'stylish':
      return makeStylish(data);
    default:
      throw new Error(`${format} not support`);
  }
};

export default formatData;
