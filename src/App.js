import { Fragment } from "react";
import "./App.css";
import { NavBar } from "./Component/Nav/NavBar";
import { LeftUi } from "./Component/UI/LeftUi";
import { RightUi } from "./Component/UI/RightUi";

function App() {
  return (
    <Fragment>
      <NavBar />
      <div className="container">
        <LeftUi />
        <RightUi />
      </div>
    </Fragment>
  );
}

export default App;
