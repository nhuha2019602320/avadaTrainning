import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchApi = (url) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const resp = await axios.get(url);
      // console.log(resp.data)
      // const respData = await resp.data;
      setData(resp.data);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("finally");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    data,
    setData,
  };
};

export const createData = async (dataReq) => {
  try {
    const request = await axios.post(
      `http://localhost:5000/api/todos`,
      dataReq
    );
    return request;
  } catch (error) {
    console.log(error);
  }
};

export const deleteData = async (id) => {
  try {
    const respon = await axios.delete(`http://localhost:5000/api/todo/${id}`);
    return respon;
  } catch (error) {
    console.log(error);
  }
};

export const updateData = async (dataReq, id) => {
  try {
    // console.log(dataReq, id)
    const request = await axios.put(`http://localhost:5000/api/todo/${id}`, dataReq);
    // const request = await axios.put(`http://localhost:5000/api/todo/${id}`, {
    //   isCompleted: dataReq.isCompleted,
    // });
    return request;
  } catch (error) {}
};

export const updateManyData = async (dataReq, listId) => {
  try {
    const respon = await axios.put(`http://localhost:5000/api/todos/${dataReq}`, listId);
    return respon.data.result
  } catch (error) {
    console.log(error)
  }
}
