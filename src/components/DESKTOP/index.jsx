import React from "react";
import Primal from "../Primal";
import Frame1 from "../Frame1";
import Data3 from "../Data3";
import "./DESKTOP.css";

function DESKTOP(props) {
  const {
    background,
    primalProps,
    frame1Props,
    data3Props,
    data32Props,
    data33Props,
    data34Props,
    data35Props,
    data36Props,
    data37Props,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="desktop screen ">
        <div className="overlap-group">
          <img className="background" src={background} />
          <div className="container">
            <Primal
              weatherapp={primalProps.weatherapp}
              natalRn={primalProps.natalRn}
              date={primalProps.date}
              ensolarado={primalProps.ensolarado}
              mx34C={primalProps.mx34C}
              min24C={primalProps.min24C}
            />
            <div className="container-card">
              <Frame1 date={frame1Props.date} hoje={frame1Props.hoje} />
              <div className="datacard">
                <Data3 cloud={data3Props.cloud} text11={data3Props.text11} date={data3Props.date} />
                <Data3
                  cloud={data32Props.cloud}
                  text11={data32Props.text11}
                  date={data32Props.date}
                  className="data-1"
                />
                <Data3
                  cloud={data33Props.cloud}
                  text11={data33Props.text11}
                  date={data33Props.date}
                  className="data-1"
                />
                <Data3
                  cloud={data34Props.cloud}
                  text11={data34Props.text11}
                  date={data34Props.date}
                  className="data-1"
                />
                <Data3
                  cloud={data35Props.cloud}
                  text11={data35Props.text11}
                  date={data35Props.date}
                  className="data-1"
                />
                <Data3
                  cloud={data36Props.cloud}
                  text11={data36Props.text11}
                  date={data36Props.date}
                  className="data-1"
                />
                <Data3
                  cloud={data37Props.cloud}
                  text11={data37Props.text11}
                  date={data37Props.date}
                  className="data-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DESKTOP;
