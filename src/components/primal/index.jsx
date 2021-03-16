import React from "react";
import "./Primal.css";

function Primal(props) {
  const { weatherapp, natalRn, date, ensolarado, mx34C, min24C } = props;

  return (
    <div className="primal">
      <div className="weather-app raleway-black-white-64px">{weatherapp}</div>
      <div className="natalrn raleway-bold-white-42px">{natalRn}</div>
      <div className="content">
        <h1 className="date valign-text-middle raleway-light-white-144px">{date}</h1>
        <div className="rectangle-1"></div>
        <div className="details">
          <div className="ensolarado raleway-bold-white-42px">{ensolarado}</div>
          <div className="details-item raleway-bold-white-42px">{mx34C}</div>
          <div className="details-item raleway-bold-white-42px">{min24C}</div>
        </div>
      </div>
    </div>
  );
}

export default Primal;
