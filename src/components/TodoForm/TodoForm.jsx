import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [content, setContent] = useState("");

  const randomId = () => {
    return Math.random().toString(36).substring(4);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const dataTodoRequest = {
      id: randomId(),
      content: content,
      isCompleted: false,
      createAt: new Date().toJSON(),
    };
    if (content) {
      addTodo(dataTodoRequest);
    }
    setContent("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </form>
    </>
  );
};

export default TodoForm;
