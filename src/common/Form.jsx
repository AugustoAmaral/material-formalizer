import React from "react";
import InlineField from "./fields/InlineField";
import SelectField from "./fields/SelectField";

const Form = ({ formId, handleSubmit, fields, ...props }) => {
  return (
    <form id={formId} onSubmit={handleSubmit} noValidate>
      {fields.map((field, key) => {
        switch (field.type) {
          case "text":
            return (
              <InlineField key={key} field={field} type="text" {...props} />
            );
          case "number":
            return (
              <InlineField key={key} field={field} type="number" {...props} />
            );
          case "textfield":
            return (
              <InlineField
                key={key}
                field={field}
                type="text"
                multiline
                {...props}
              />
            );
          case "select":
            return <SelectField key={key} field={field} {...props} />;
          default:
            return <InlineField key={key} field={field} {...props} />;
        }
      })}
    </form>
  );
};

export default Form;
