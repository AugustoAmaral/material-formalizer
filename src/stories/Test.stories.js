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

storiesOf("Test", module).add("TestDiv", () => {
  const [open, setOpen] = useState(false);

  const handleToggleDialog = () => setOpen((s) => !s);
  return (
    <div>
      <button onClick={handleToggleDialog}>Open Form</button>
      <DialogForm
        fields={fields}
        open={open}
        onClose={handleToggleDialog}
        title="Um novo Form"
        onSubmit={(e) => console.log(e)}
        saveText="Salvar"
      />
    </div>
  );
});
