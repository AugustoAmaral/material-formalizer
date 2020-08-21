import React from "react";
import TextField from "@material-ui/core/TextField";

const InlineTextField = ({
  handleBlur,
  handleChange,
  isSubmitting,
  field,
  values,
  errors,
  type,
  multiline,
}) => {
  return (
    <TextField
      type={type}
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
      multiline={multiline}
      fullWidth
    />
  );
};

export default InlineTextField;
