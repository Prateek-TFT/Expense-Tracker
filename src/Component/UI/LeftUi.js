import React from "react";
import { Expenses } from "../componentUI/Expenses";
import { Incomes } from "../componentUI/Incomes";
import "./LeftUi.css";
export const LeftUi = () => {
  return (
    <div className="leftContainer">
      <Incomes />
      <Expenses />
    </div>
  );
};
