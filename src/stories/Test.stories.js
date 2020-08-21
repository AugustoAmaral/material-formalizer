import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import DialogForm from "../dialogForm";

const fields = [
  {
    name: "name",
    type: "text",
    label: "Nome",
    required: true,
    focus: true,
  },
  {
    name: "age",
    type: "number",
    label: "Idade",
  },
];

storiesOf("With dialog", module).add("blank", () => {
  const [open, setOpen] = useState(false);

  const handleToggleDialog = () => setOpen((s) => !s);
  return (
    <div>
      <button onClick={handleToggleDialog}>Open Form</button>
      <DialogForm
        open={open}
        onClose={handleToggleDialog}
        onSubmit={(e) => console.log(e)}
        saveText="Save"
        title="A new form"
      />
    </div>
  );
});

storiesOf("With dialog", module).add("with fields", () => {
  const [open, setOpen] = useState(false);

  const handleToggleDialog = () => setOpen((s) => !s);
  return (
    <div>
      <button onClick={handleToggleDialog}>Open Form</button>
      <DialogForm
        fields={fields}
        open={open}
        onClose={handleToggleDialog}
        onSubmit={(e) => console.log(e)}
        saveText="Save"
        title="A new form"
      />
    </div>
  );
});

storiesOf("With dialog", module).add("with fields and initial values", () => {
  const [open, setOpen] = useState(false);
  const initialValues = { name: "Augusto", age: 25 };

  const handleToggleDialog = () => setOpen((s) => !s);
  return (
    <div>
      <button onClick={handleToggleDialog}>Open Form</button>
      <DialogForm
        initialValues={initialValues}
        fields={fields}
        open={open}
        onClose={handleToggleDialog}
        onSubmit={(e) => console.log(e)}
        saveText="Save"
        title="A new form"
      />
    </div>
  );
});
