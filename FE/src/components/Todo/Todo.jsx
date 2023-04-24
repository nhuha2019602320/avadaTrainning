import { Page } from "@shopify/polaris";
import React from "react";
import Header from "../Header/Header";
import TodoList from "../TodoList/TodoList";
import ModalCreate from "../Modal/ModalCreate";

function Todo() {
  return (
    <>
      <Header />
      <div style={{ marginTop: "10px" }}>
        <Page>
          <div style={{ marginTop: "20px" }}>
            <TodoList />
          </div>
        </Page>
      </div>
    </>
  );
}

export default Todo;
