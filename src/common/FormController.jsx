import React from "react";
import { Formik } from "formik";
import generateValidations from "../functions/generateValidations";
import generateInitialValue from "../functions/generateInitialValue";
import generateSubmitObject from "../functions/generateSubmitObject";
import Form from "./Form";

const FormController = ({ fields, entry, onSubmit, ...props }) => {
  return (
    <Formik
      initialValues={{ ...generateInitialValue(fields, entry) }}
      validationSchema={generateValidations(fields)}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit({
          ...generateSubmitObject(fields, values),
        });
        setSubmitting(false);
      }}
    >
      {(formikProps) => (
        <Form {...props} {...formikProps} entry={entry} fields={fields} />
      )}
    </Formik>
  );
};

export default FormController;
