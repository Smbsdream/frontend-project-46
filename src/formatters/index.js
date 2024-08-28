import stylish from './stylish.js';
import plain from './plain.js';

const formatData = (data, format) => {
  switch (format) {
    case 'stylish':
      return stylish(data);
    case 'plain':
      return plain(data);
    default:
      throw new Error(`${format} not support`);
  }
};

export default formatData;
