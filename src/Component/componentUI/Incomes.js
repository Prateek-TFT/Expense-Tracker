import React, { useContext } from "react";
import { PulseLoader } from "react-spinners";
import { ExpenseContext } from "../context/ExpenseContext";
import "./Incomes.css";
export const Incomes = () => {
  const expCtx = useContext(ExpenseContext);
  let income = expCtx.data.filter((item) => {
    return item.type === "income";
  });
  const clickHandler = (key) => {
    expCtx.removeData(key);
  };
  return (
    <div className="incomeContainer">
      <h3>Income's</h3>
      <div id="spinneralign">
        {expCtx.Loader && <PulseLoader color="green"></PulseLoader>}
      </div>
      {!expCtx.Loader && (
        <div className="inBox">
          {income.map((item) => {
            return (
              <div
                onClick={() => clickHandler(item.key)}
                key={item.key}
                className="displayBoxIncome"
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
