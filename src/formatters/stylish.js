import _ from 'lodash';

const getSpaces = (depth) => '    '.repeat(depth);
const closeBracket = (depth) => `${getSpaces(depth - 1)}}`;

const stringify = (value, depth = 1) => {
  const indent = getSpaces(depth);

  if (!_.isObject(value)) {
    return `${value}`;
  }

  const entries = Object.entries(value);
  const newData = entries.map(([key, val]) => `${indent}${key}: ${stringify(val, depth + 1)}`);

  return ['{', ...newData, closeBracket(depth)].join('\n');
};

const markers = {
  deleted: '-',
  added: '+',
  unchanged: ' ',
};

const stylish = (diff) => {
  const iter = (node, depth) => {
    const indent = getSpaces(depth).slice(2);

    const newData = node.flatMap((item) => {
      const { key, type, value } = item;
      switch (type) {
        case 'deleted':
        case 'added':
        case 'unchanged':
          return `${indent}${markers[type]} ${key}: ${stringify(value, depth + 1)}`;
        case 'changed':
          return [
            `${indent}${markers.deleted} ${key}: ${stringify(item.value1, depth + 1)}`,
            `${indent}${markers.added} ${key}: ${stringify(item.value2, depth + 1)}`,
          ];
        case 'nested':
          return `${indent}  ${key}: ${iter(item.children, depth + 1)}`;
        default:
          throw new Error(`Type "${type}" is unknown`);
      }
    });

    return ['{', ...newData, closeBracket(depth)].join('\n');
  };

  return iter(diff, 1);
};

export default stylish;
