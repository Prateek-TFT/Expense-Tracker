import React, { useContext } from "react";
import "./RightUi.css";
import addImage from "../Assets/Icons/add.png";
import minusImage from "../Assets/Icons/minus.png";
import equalImage from "../Assets/Icons/equal.png";
import { ExpenseInput } from "../componentUI/ExpenseInput";
import { IncomeInput } from "../componentUI/IncomeInput";
import { ExpenseContext } from "../context/ExpenseContext";
import { PulseLoader } from "react-spinners";
export const RightUi = () => {
  const expCtx = useContext(ExpenseContext);
  const IncomeItems = expCtx.data.filter((item) => {
    return item.type === "income";
  });
  const ExpenseItems = expCtx.data.filter((item) => {
    return item.type === "expense";
  });
  const TotalIncome = IncomeItems.reduce((currentTotal, item) => {
    return Number(item.amount) + Number(currentTotal);
  }, 0);
  const TotalExpense = ExpenseItems.reduce((currentTotal, item) => {
    return Number(item.amount) + Number(currentTotal);
  }, 0);

  const NetAmount = TotalIncome - TotalExpense;
  const onIncomeHandler = () => {
    expCtx.setIncomeDrawer(true);
  };
  const onExpenseHandler = () => {
    expCtx.setExpenseDrawer(true);
  };
  return (
    <div className="rightContainer">
      <ExpenseInput />
      <IncomeInput />
      <div className="dataBox">
        <div className="showDataBox">
          <div className="showDataBoxImageDiv">
            <img className="icon" src={addImage} alt="loading"></img>
          </div>
          <div className="showDataBoxTextDiv">
            <h3>Cash In</h3>
            {expCtx.Loader && <PulseLoader color="green"></PulseLoader>}
            {!expCtx.Loader && <h4>₹ {TotalIncome}</h4>}
          </div>
        </div>
        <div className="showDataBox">
          <div className="showDataBoxImageDiv">
            <img className="icon" src={minusImage} alt="loading"></img>
          </div>
          <div className="showDataBoxTextDiv">
            <h3>Cash Out</h3>
            {expCtx.Loader && <PulseLoader color="red"></PulseLoader>}
            {!expCtx.Loader && <h4>₹ {TotalExpense}</h4>}
          </div>
        </div>
        <div className="showDataBox">
          <div className="showDataBoxImageDiv">
            <img className="icon" src={equalImage} alt="loading"></img>
          </div>
          <div className="showDataBoxTextDiv">
            <h3>Net Balance</h3>
            {expCtx.Loader && <PulseLoader color="blue"></PulseLoader>}
            {!expCtx.Loader && <h4>₹ {NetAmount}</h4>}
          </div>
        </div>
      </div>
      <div className="formBox">
        <button onClick={onExpenseHandler} className="addExpenseButton">
          - Cash Out
        </button>
        <button onClick={onIncomeHandler} className="addIncomeButton">
          + Cash In
        </button>
      </div>
    </div>
  );
};
