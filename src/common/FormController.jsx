import React from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import generateValidations from "../functions/generateValidations";
import generateInitialValue from "../functions/generateInitialValue";
import generateSubmitObject from "../functions/generateSubmitObject";
import Form from "./Form";

const FormController = ({ fields, initialValues, onSubmit, ...props }) => {
  return (
    <Formik
      initialValues={{ ...generateInitialValue(fields, initialValues) }}
      validationSchema={generateValidations(fields)}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit({
          ...generateSubmitObject(fields, values),
        });
        setSubmitting(false);
      }}
    >
      {(formikProps) => <Form {...props} {...formikProps} fields={fields} />}
    </Formik>
  );
};

export default FormController;

FormController.defaultProps = {
  fields: [],
};

FormController.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      label: PropTypes.string,
      required: PropTypes.bool,
      focus: PropTypes.bool,
    }).isRequired
  ),
  onSubmit: PropTypes.func.isRequired,
};
