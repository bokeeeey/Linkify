import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const App = () => {
  return (
    <>
      <div>'Hello react!'</div>
      <button>안녕버튼</button>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
