import React, { useCallback, useState } from "react";
import { Button, Modal, TextField } from "@shopify/polaris";

const ModalCreate = ({ handleCreate }) => {
  const [textFieldValue, setTextFieldValue] = useState("");
  const [active, setActive] = useState(false);
  const randomId = () => {
    return Math.random().toString(36).substring(4);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: randomId(),
      content: textFieldValue,
      isCompleted: false,
    };
    if (textFieldValue) {
      handleCreate(data);
      setActive(!active);
    }
    setTextFieldValue("");
  };

  const handleChange = () => {
    setActive(!active);
    console.log(textFieldValue);

    setTextFieldValue("");
  };
  const activator = (
    <Button primary onClick={handleChange}>
      Create Todo
    </Button>
  );
  const handleTextFieldChange = useCallback((value) =>
    setTextFieldValue(value)
  );
  return (
    <form onSubmit={handleSubmit}>
      <Modal
        activator={activator}
        open={active}
        onClose={handleChange}
        title="Create a new todo"
        primaryAction={{
          content: "Create",
          onAction: handleSubmit,
        }}
        secondaryActions={[
          {
            content: "Cancel",
            onAction: handleChange,
          },
        ]}
      >
        <Modal.Section>
          <TextField
            value={textFieldValue}
            onChange={handleTextFieldChange}
            placeholder="This is my todo"
            autoComplete="off"
          />
        </Modal.Section>
      </Modal>
    </form>
  );
};

export default ModalCreate;
