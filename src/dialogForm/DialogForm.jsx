import React from "react";
import withFormDialog from "./withFormDialog";
import FormController from "../common/FormController";

const DialogForm = ({ ...props }) => {
  return <FormController {...props} />;
};

export default withFormDialog(DialogForm);
