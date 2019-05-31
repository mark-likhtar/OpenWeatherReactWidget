import React, { Component } from "react";
import moment from "moment";

import icons from "../Service/iconsService";

const LiveWeather = props => {
  return (
    <div className="liveWeather__wrap">
      <div className="liveTemp">
        <h2>
          {Math.round(props.weather.main.temp)}
          <sup>o</sup>
          {props.units === 'imperial' && 'F'}
        </h2>
        <span className="dateSpan">
          {moment().format(`dddd D`)}
          <sup>th</sup>
        </span>
      </div>
      <div className="liveIcon">
        <i className={`wi ${icons[props.weather.weather[0].icon]}`} />
        <span>
          {Math.round(props.weather.wind.speed)}мс / {Math.round(props.weather.main.temp)}<sup>o</sup>
        </span>
      </div>
    </div>
  );
};

export default LiveWeather;
