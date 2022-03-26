import React from "react";

import "./Drawer.css";

const Drawer = (props) => {
  const DrawerClass = ["Drawer", props.open ? "DrawerOpen" : "DrawerClosed"];
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div className={DrawerClass.join(" ")}>{props.children}</div>
    </div>
  );
};

export default Drawer;
