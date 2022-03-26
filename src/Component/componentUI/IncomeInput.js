import React, { useContext, useRef } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import Drawer from "../UI/Drawer";
import "./IncomeInput.css";
export const IncomeInput = (props) => {
  const expCtx = useContext(ExpenseContext);
  const DateRef = useRef();
  const TimeRef = useRef();
  const AmountRef = useRef();
  const RemarksRef = useRef();
  const onCloseHandler = () => {
    expCtx.setIncomeDrawer(false);
  };
  const AddIncomeHandler = () => {
    const InComeData = {
      date: DateRef.current.value,
      time: TimeRef.current.value,
      remark: RemarksRef.current.value,
      amount: AmountRef.current.value,
      type: "income",
    };
    expCtx.addData(InComeData);
    expCtx.setIncomeDrawer(false);
    FormClearHandler();
  };
  const FormClearHandler = () => {
    DateRef.current.value = "";
    AmountRef.current.value = "";
    TimeRef.current.value = "";
    RemarksRef.current.value = "";
  };
  return (
    <Drawer open={expCtx.incomeDrawer}>
      <div className="mainBox">
        <div className="headingBox">
          <h3>Add Cash In Entry</h3>
          <button onClick={onCloseHandler}>X</button>
        </div>
        <div className="inputBox">
          <div className="inputBoxContainer">
            <form>
              <label htmlFor="date">Date</label>
              <br />
              <input
                className="inputDate_Time"
                id="date"
                type="date"
                ref={DateRef}
              ></input>
              <br />
              <label htmlFor="time">Time</label>
              <br />
              <input
                className="inputDate_Time"
                id="time"
                type="time"
                ref={TimeRef}
              ></input>
              <br />
              <label htmlFor="remarks">remarks</label>
              <br />
              <input
                id="remarks"
                type="text"
                maxLength={100}
                minLength={1}
                ref={RemarksRef}
              ></input>
              <br />
              <label htmlFor="amount">Amount</label>
              <br />
              <input
                ref={AmountRef}
                id="amount"
                type="number"
                min={0}
                maxLength={100}
                minLength={1}
              ></input>
            </form>
          </div>
        </div>
        <div className="buttonBox">
          <button onClick={FormClearHandler}>clear</button>
          <button onClick={AddIncomeHandler}>Save</button>
        </div>
      </div>
    </Drawer>
  );
};
