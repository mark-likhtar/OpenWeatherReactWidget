import React, { Component } from "react";

import LiveWeather from "./LiveWeather";
import WeatherForecastWrap from "./WeatherForecastWrap";

const Footer = ({ weather, forecast, units, lang }) => (
  <div className="footer__wrap">
    <LiveWeather weather={weather} units={units} lang={lang}/>
    <WeatherForecastWrap forecast={forecast} units={units}/>
  </div>
);

export default Footer;
