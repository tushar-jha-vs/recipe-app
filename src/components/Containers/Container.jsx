import React from "react";
import "./ContainerStyles.css";

const Container = ({children}) => {
  return <div className="parent-container">{children}</div>;
};

export default Container;
