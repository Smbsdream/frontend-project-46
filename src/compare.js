import _ from 'lodash';

const compareObjects = (data1, data2) => {
  const unionKeys = Object.keys({ ...data1, ...data2 });
  const sortedKeys = _.sortBy(unionKeys);

  const result = sortedKeys.map((key) => {
    if (!_.has(data2, key)) {
      return `  - ${key}: ${data1[key]}`;
    }
    if (!_.has(data1, key)) {
      return `  + ${key}: ${data2[key]}`;
    }
    if (data1[key] !== data2[key]) {
      return `  - ${key}: ${data1[key]}\n  + ${key}: ${data2[key]}`;
    }
    return `    ${key}: ${data1[key]}`;
  });

  return `{\n${result.join('\n')}\n}`;
};

export default compareObjects;
