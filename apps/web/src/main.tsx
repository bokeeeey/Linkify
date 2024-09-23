import { Header } from "@repo/ui";
import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function App(): JSX.Element {
  return (
    <>
      <div>Hello react!</div>
      <button type="button">안녕버튼 {"린트확인용 "}</button>
      <Header />
    </>
  );
}

createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
