import _ from 'lodash';

const compareObjects = (object1, object2) => {
  const unionKeys = Object.keys({ ...object1, ...object2 });
  const sortKeys = _.sortBy(unionKeys);

  const result = sortKeys.map((key) => {
    if (_.isObject(object1[key]) && _.isObject(object2[key])) {
      return {
        key,
        type: 'nested',
        children: compareObjects(object1[key], object2[key]),
      };
    }
    if (!_.has(object1, key)) {
      return { key, type: 'added', value: object2[key] };
    }
    if (!_.has(object2, key)) {
      return { key, type: 'deleted', value: object1[key] };
    }
    if (object1[key] !== object2[key]) {
      return {
        key,
        type: 'changed',
        value1: object1[key],
        value2: object2[key],
      };
    }
    return { key, type: 'unchanged', value: object1[key] };
  });

  return result;
};

export default compareObjects;
