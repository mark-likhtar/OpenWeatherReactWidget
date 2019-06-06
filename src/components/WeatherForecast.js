import React from "react";
import PropTypes from 'prop-types';

import ForecastItem from "./ForecastItem";

const WeatherForecast = ({ forecast, units }) => {
  return forecast.map(item => {
    return <ForecastItem key={item.dt} item={item} units={units}/>;
  });
};

export default WeatherForecast;

WeatherForecast.propTypes = {
  forecast: PropTypes.array,
  units: PropTypes.string
}