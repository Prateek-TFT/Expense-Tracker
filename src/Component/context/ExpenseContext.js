import React, { useEffect, useState } from "react";
export const ExpenseContext = React.createContext({
  incomeDrawer: false,
  expenseDrawer: false,
  Loader: false,
  setIncomeDrawer: () => {},
  setExpenseDrawer: () => {},
  data: [],
  addData: () => {},
  removeData: () => {},
});
const ExpenseContextProvider = (props) => {
  const [incomeDrawer, setincomeDrawer] = useState(false);
  const [expenseDrawer, setexpenseDrawer] = useState(false);
  const [Loader, setloader] = useState(false);
  const setIncomeDrawer = (value) => {
    setincomeDrawer(value);
  };
  const setExpenseDrawer = (value) => {
    setexpenseDrawer(value);
  };
  const setLoader = (value) => {
    setloader(value);
  };
  const [data, setData] = useState([]);

  const AddExpenseHandler = (receivedData) => {
    setLoader(true);
    fetch("https://learningreact-75dda-default-rtdb.firebaseio.com/Data.json", {
      method: "POST",
      body: JSON.stringify(receivedData),
    }).then(() => {
      setLoader(false);
    });
  };

  const deleteHandler = (key) => {
    setLoader(true);
    fetch(
      `https://learningreact-75dda-default-rtdb.firebaseio.com/Data/${key}.json`,
      {
        method: "Delete",
      }
    ).then(() => {
      setLoader(false);
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://learningreact-75dda-default-rtdb.firebaseio.com/Data.json"
      );
      const responseData = await response.json();

      const loadedData = [];

      for (const key in responseData) {
        loadedData.push({
          key: key,
          date: responseData[key].date,
          time: responseData[key].time,
          remark: responseData[key].remark,
          amount: responseData[key].amount,
          type: responseData[key].type,
        });
      }

      setData(loadedData);
    };

    fetchData();
  }, [Loader]);
  const ctxData = {
    incomeDrawer: incomeDrawer,
    expenseDrawer: expenseDrawer,
    Loader: Loader,
    data: data,
    setIncomeDrawer: setIncomeDrawer,
    setExpenseDrawer: setExpenseDrawer,
    setIncomeLoader: setLoader,
    removeData: deleteHandler,
    addData: AddExpenseHandler,
  };
  return (
    <ExpenseContext.Provider value={ctxData}>
      {props.children}
    </ExpenseContext.Provider>
  );
};
export default ExpenseContextProvider;
