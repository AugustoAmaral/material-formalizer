import React from "react";
import TextField from "@material-ui/core/TextField";

const Form = ({
  formId,
  handleSubmit,
  handleBlur,
  handleChange,
  isSubmitting,
  fields,
  values,
  errors,
}) => {
  return (
    <form id={formId} onSubmit={handleSubmit} noValidate>
      {fields.map((field, key) => (
        <TextField
          key={key}
          margin="normal"
          name={field.name}
          label={field.label || field.name}
          variant="filled"
          value={values[field.name]}
          helperText={errors[field.name]}
          error={Boolean(errors[field.name])}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={isSubmitting}
          required={field.required}
          autoFocus={values[field.focus]}
          fullWidth
        />
      ))}
    </form>
  );
};

export default Form;
