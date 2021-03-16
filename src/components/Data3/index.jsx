import React from "react";
import "./Data3.css";

function Data3(props) {
  const { cloud, text11, date, className } = props;

  return (
    <div className={`data ${className || ""}`}>
      <img className="cloud" src={cloud} />
      <div className="text-1 raleway-medium-white-40px">{text11}</div>
      <div className="date3 raleway-medium-white-42px">{date}</div>
    </div>
  );
}

export default Data3;
