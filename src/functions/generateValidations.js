import * as Yup from "yup";

export default (fields) =>
  Yup.object().shape({
    ...fields.reduce((accumulator, actual) => {
      switch (actual.type) {
        case "number":
          accumulator[actual.name] = Yup.number();
          break;
        case "text":
          accumulator[actual.name] = Yup.string();
          break;
        default:
          accumulator[actual.name] = Yup.mixed();
          break;
      }
      if (actual.required) {
        accumulator[actual.name] = accumulator[actual.name].required();
      }
      return accumulator;
    }, {}),
  });
