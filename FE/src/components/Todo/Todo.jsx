import { Page } from "@shopify/polaris";
import React from "react";
import Header from "../Header/Header";
import TodoList from "../TodoList/TodoList";

function Todo() {
  return (
    <>
      <Header />
      <Page title="Todos">
        <TodoList />
      </Page>
    </>
  );
}

export default Todo;
