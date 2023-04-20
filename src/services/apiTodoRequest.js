import axios from "axios";

export const getTodos = async () => {
  try {
    const respon = await axios.get(
      `${process.env.REACT_APP_URL_LOCALHOST}/api/todos?limit=10`
    );
    return respon;
  } catch (error) {
    console.log(error);
  }
};
export const getTodoById = async (id) => {
  try {
    const respon = await axios.get(
      `${process.env.REACT_APP_URL_LOCALHOST}/api/todo/${id}`
    );
    return await respon.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = async (id) => {
  try {
    const respon = axios.delete(
      `${process.env.REACT_APP_URL_LOCALHOST}/api/todo/${id}`
    );
    return respon;
  } catch (error) {
    console.log(error);
  }
};

export const createTodo = async (data) => {
  try {
    const request = axios.post(
      `${process.env.REACT_APP_URL_LOCALHOST}/api/todos`,
      data
    );
    return request;
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = async (data, id) => {
  try {
    const request = await axios.put(
      `${process.env.REACT_APP_URL_LOCALHOST}/api/todo/${id}`,
      { isCompleted: data.isCompleted }
    );
    return request;
  } catch (error) {
    console.log(error);
  }
};
