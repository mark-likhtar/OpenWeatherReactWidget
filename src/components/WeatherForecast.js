import React from "react";

import ForecastItem from "./ForecastItem";

const WeatherForecast = ({ forecast, units }) => {
  return forecast.map(item => {
    return <ForecastItem key={item.dt} item={item} units={units}/>;
  });
};

export default WeatherForecast;
