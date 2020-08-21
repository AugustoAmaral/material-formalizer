// options
// [["a", "A"], ["b", "b"]]
// ["a", "b", "c"]
// [{"name": "Name", "label": "Label"}]
// [{"name": "Name"}]

const error = () => {
  throw new Error("Invalid format recieved in select options");
};

export default (options) =>
  options.reduce((accumulator, actual) => {
    switch (typeof actual) {
      case "string":
        accumulator.push({ value: actual, label: actual });
        break;
      case "number":
        accumulator.push({ value: actual, label: actual });
        break;
      case "boolean":
        accumulator.push({ value: actual, label: actual.toString() });
        break;
      case "object":
        if (Array.isArray(actual)) {
          if (actual.length === 1) {
            if (typeof actual[0] === "string") {
              accumulator.push({ value: actual[0], label: actual[0] });
            } else {
              error();
            }
          } else if (actual.length === 2) {
            if (
              typeof actual[0] === "string" &&
              typeof actual[1] === "string"
            ) {
              accumulator.push({ value: actual[0], label: actual[1] });
            } else {
              error();
            }
          } else {
            error();
          }
        } else {
          if (!actual.name || typeof actual.name !== "string") error();
          if (actual.label) {
            if (typeof actual.label !== "string") error();
            accumulator.push({ value: actual.name, label: actual.label });
          } else {
            accumulator.push({ value: actual.name, label: actual.name });
          }
        }
        break;
      default:
        error();
    }
    return accumulator;
  }, []);
