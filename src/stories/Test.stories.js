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

storiesOf("With dialog", module).add("with select field", () => {
  const [open, setOpen] = useState(false);
  const newFields = [
    ...fields,
    {
      name: "country",
      type: "select",
      label: "Country",
      required: true,
      options: [
        ["brazil", "Brasil"],
        ["norway", "Noruega"],
        ["netherlands", "Terras Infernais"],
      ],
    },
    {
      name: "state",
      type: "select",
      label: "State",
      required: true,
      options: [
        { name: "RJ", label: "Rio de Janeiro" },
        { name: "ES", label: "Espirito Santo" },
        { name: "AM", label: "Amazonas" },
      ],
    },
    {
      name: "random",
      type: "select",
      label: "Random",
      required: true,
      options: [
        { name: "Hi" },
        { name: "test", label: "TESTE" },
        ["sample"],
        ["withCaptalized", "Captalized"],
      ],
    },
  ];

  const handleToggleDialog = () => setOpen((s) => !s);
  return (
    <div>
      <button onClick={handleToggleDialog}>Open Form</button>
      <DialogForm
        fields={newFields}
        open={open}
        onClose={handleToggleDialog}
        onSubmit={(e) => console.log(e)}
        saveText="Save"
        title="A new form"
      />
    </div>
  );
});
