import React from "react";
import "./Frame1.css";

function Frame1(props) {
  const { date, hoje } = props;

  return (
    <div className="frame-1">
      <div className="frame-5">
        <div className="date2 raleway-bold-white-32px">{date}</div>
        <div className="rectangle-2"></div>
      </div>
      <div className="hoje raleway-bold-white-32px">{hoje}</div>
    </div>
  );
}

export default Frame1;
