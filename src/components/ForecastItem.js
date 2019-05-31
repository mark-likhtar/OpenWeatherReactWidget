import React, { Component } from "react";
import moment from "moment";

import icons from '../Service/iconsService'

const ForecastItem = ({ item, units }) => {
  return (
    <div className="forecastItem">
      <span>{moment(`${item.dt_txt}`).format("D/MM")}</span>
      <span>{moment(`${item.dt_txt}`).format("H:mm")}</span>
      <i className={`wi ${icons[item.weather[0].icon]}`}></i>
      <span>
        {console.log(units)
        }
        {Math.round(item.main.temp)}<sup>o</sup>{units === "imperial" && 'F'}
      </span>
    </div>
  );
};

export default ForecastItem;
