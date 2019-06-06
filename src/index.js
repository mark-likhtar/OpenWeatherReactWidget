import React from "react";
import { render } from "react-dom";

import "./styles/style.scss"
import WeatherWidget from "./components/WeatherWidget";
render(
  <WeatherWidget
    apiKey="7cc0a3060e58f17a24e70b46ad9ed851"
    position="top-left"
    location="Minsk"
    units="metric"
    lang="ru"
  />,
  document.getElementById("app")
);
