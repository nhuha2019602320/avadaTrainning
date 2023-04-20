import React from "react";

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.content}

      <div>
        <button onClick={() => completeTodo(todo.id, index)}>Complete</button>
        {/* <button onClick={() => completeTodo(todo.id,{...todo ,isCompleted:!todo.isCompleted })}>Complete</button> */}
        <button onClick={() => removeTodo(todo.id)}>x</button>
      </div>
    </div>
  );
};

export default Todo;
