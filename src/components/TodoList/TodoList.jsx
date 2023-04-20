import React, { useEffect, useState } from "react";
import "./Todo.css";
import TodoForm from "../TodoForm/TodoForm";
import Todo from "../Todo/Todo";
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../../services/apiTodoRequest";
const TodoList = () => {
  const [todos, setTodos] = useState();

  const addTodo = (text) => {
    if (text) createTodo(text);
    setTodos([...todos, text]);
  };

  const completeTodo = async (id, newData) => {
    // const newTodos = [...todos];
    // if (todos[index].isCompleted === true) {
    //   updateTodo({ isCompleted: false }, id);
    //   todos[index].isCompleted = false;
    // } else {
    //   updateTodo({ isCompleted: true }, id);
    //   todos[index].isCompleted = true;
    // }
    const todoItem = todos.find((item) => item.id === id);
    const dataUpdate = {
      ...todoItem,
      isCompleted: !todoItem.isCompleted,
    };
    const todoUpDate = await updateTodo(dataUpdate, id);
    setTodos(todoUpDate.data);

    // await updateTodo(newData, id);
    // const newTodos = todos.map(item => {
    //   if(item.id === id){
    //     return newData
    //   }
    //   return item
    // })
    // console.log("todoUpDate", todoUpDate.data);
    // setTodos(newTodos);
  };

  const removeTodo = (id) => {
    if (id) {
      deleteTodo(id);
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  useEffect(() => {
    getTodos().then((res) => setTodos(res.data));
  }, []);
  return (
    <div className="app">
      <div className="todo-list">
        <div>
          {todos?.map((todo, index) => (
            <Todo
              key={todo.id}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
