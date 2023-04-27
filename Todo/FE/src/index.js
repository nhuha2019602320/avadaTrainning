import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.jsx";
import "@shopify/polaris/build/esm/styles.css";
import { AppProvider } from "@shopify/polaris";
import en from "@shopify/polaris/locales/en.json";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider i18n={en}>
    <App />
  </AppProvider>
);
