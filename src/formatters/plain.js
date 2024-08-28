import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }

  if (_.isString(value)) {
    return `'${value}'`;
  }

  return value;
};

const plain = (diff) => {
  const iter = (node, ancestry) => {
    const newData = node.flatMap((item) => {
      const { key, type, value } = item;
      const curAncestry = ancestry === '' ? `${key}` : `${ancestry}.${key}`;
      switch (type) {
        case 'added':
          return `Property '${curAncestry}' was added with value: ${stringify(value)}`;
        case 'deleted':
          return `Property '${curAncestry}' was removed`;
        case 'changed':
          return `Property '${curAncestry}' was updated. From ${stringify(item.value1)} to ${stringify(item.value2)}`;
        case 'nested':
          return iter(item.children, curAncestry);
        case 'unchanged':
          return null;
        default:
          throw new Error(`Type "${type}" is unknown`);
      }
    })
      .filter((el) => el !== null)
      .join('\n');

    return newData;
  };

  return iter(diff, '');
};

export default plain;
