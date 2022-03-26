import React, { useContext } from "react";
import { PulseLoader } from "react-spinners";
import { ExpenseContext } from "../context/ExpenseContext";
import "./Expenses.css";
export const Expenses = () => {
  const expCtx = useContext(ExpenseContext);
  let expense = expCtx.data.filter((item) => {
    return item.type === "expense";
  });
  const clickHandler = (key) => {
    expCtx.removeData(key);
  };
  return (
    <div className="expenseContainer">
      <h3>Expense's</h3>
      <div id="spinneralign">
        {expCtx.Loader && <PulseLoader color="red"></PulseLoader>}
      </div>
      {!expCtx.Loader && (
        <div className="inBox">
          {expense.map((item) => {
            console.log(item.key);
            return (
              <div
                onClick={() => clickHandler(item.key)}
                key={item.key}
                className="displayBoxExpense"
              >
                <p>{item.remark}</p>
                <p>{item.amount}</p>
                <div />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
