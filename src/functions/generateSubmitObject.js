export default (fields, values) =>
  fields.reduce((accumulator, actual) => {
    accumulator[actual.name] = values?.[actual.name];
    return accumulator;
  }, {});
