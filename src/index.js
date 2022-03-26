import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ExpenseContextProvider from "./Component/context/ExpenseContext";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <ExpenseContextProvider>
    <App />
  </ExpenseContextProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
