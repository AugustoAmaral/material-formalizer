import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import generateOptions from "../../functions/generateOptions";

const SelectField = ({ field, values, errors, isSubmitting, handleChange }) => {
  return (
    <FormControl
      variant="filled"
      margin="normal"
      required={field.required}
      error={Boolean(errors[field.name])}
      disabled={isSubmitting}
      fullWidth
    >
      <InputLabel>{field.label || field.name}</InputLabel>
      <Select
        name={field.name}
        value={values[field.name]}
        onChange={handleChange}
      >
        {[...generateOptions(field.options)].map((element, key) => (
          <MenuItem key={key} value={element.value}>
            {element.label}
          </MenuItem>
        ))}
      </Select>
      {errors[field.name] && (
        <FormHelperText>{errors[field.name]}</FormHelperText>
      )}
    </FormControl>
  );
};

export default SelectField;
