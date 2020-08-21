export default (fields, entries) =>
  fields.reduce((accumulator, actual) => {
    accumulator[actual.name] = entries?.[actual.name] || "";
    return accumulator;
  }, {});
