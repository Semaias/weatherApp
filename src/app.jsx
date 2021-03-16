import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import DESKTOP from "./components/DESKTOP";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|desktop)">
          <DESKTOP {...DESKTOPData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const primalData = {
    weatherapp: "WeatherApp",
    natalRn: "Natal/RN",
    date: "32º",
    ensolarado: "Ensolarado",
    mx34C: "Máx. 34ºC",
    min24C: "Min. 24ºC",
};

const frame1Data = {
    date: "Hoje",
    hoje: "Amanhã",
};

const data3Data = {
    cloud: "https://anima-uploads.s3.amazonaws.com/projects/60356450df105187c848c79f/releases/6050bfbf5b9ec4b3a601b541/img/cloud-10@2x.svg",
    text11: "09:00",
    date: "27º",
};

const data32Data = {
    cloud: "https://anima-uploads.s3.amazonaws.com/projects/60356450df105187c848c79f/releases/6050bfbf5b9ec4b3a601b541/img/cloud-10@2x.svg",
    text11: "09:00",
    date: "27º",
};

const data33Data = {
    cloud: "https://anima-uploads.s3.amazonaws.com/projects/60356450df105187c848c79f/releases/6050bfbf5b9ec4b3a601b541/img/cloud-10@2x.svg",
    text11: "09:00",
    date: "27º",
};

const data34Data = {
    cloud: "https://anima-uploads.s3.amazonaws.com/projects/60356450df105187c848c79f/releases/6050bfbf5b9ec4b3a601b541/img/cloud-10@2x.svg",
    text11: "09:00",
    date: "27º",
};

const data35Data = {
    cloud: "https://anima-uploads.s3.amazonaws.com/projects/60356450df105187c848c79f/releases/6050bfbf5b9ec4b3a601b541/img/cloud-10@2x.svg",
    text11: "09:00",
    date: "27º",
};

const data36Data = {
    cloud: "https://anima-uploads.s3.amazonaws.com/projects/60356450df105187c848c79f/releases/6050bfbf5b9ec4b3a601b541/img/cloud-10@2x.svg",
    text11: "09:00",
    date: "27º",
};

const data37Data = {
    cloud: "https://anima-uploads.s3.amazonaws.com/projects/60356450df105187c848c79f/releases/6050bfbf5b9ec4b3a601b541/img/cloud-10@2x.svg",
    text11: "09:00",
    date: "27º",
};

const DESKTOPData = {
    background: "https://anima-uploads.s3.amazonaws.com/projects/60356450df105187c848c79f/releases/6050bfbf5b9ec4b3a601b541/img/background-2@1x.svg",
    primalProps: primalData,
    frame1Props: frame1Data,
    data3Props: data3Data,
    data32Props: data32Data,
    data33Props: data33Data,
    data34Props: data34Data,
    data35Props: data35Data,
    data36Props: data36Data,
    data37Props: data37Data,
};

