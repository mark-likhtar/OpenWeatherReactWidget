import ScrollArea from "react-scrollbar";
import PropTypes from 'prop-types';
import React from "react";

import WeatherForecast from "./WeatherForecast";

const WeatherForecastArea = ({ forecast, units }) => (
  <ScrollArea
    speed={2.8}
    className="area"
    contentClassName="content"
    horizontal={true}
    contentClassName={"scroll-area-container"}
  >
    <WeatherForecast forecast={forecast} units={units} />
  </ScrollArea>
);

export default WeatherForecastArea;

WeatherForecastArea.propTypes = {
  forecast: PropTypes.array,
  units: PropTypes.string
}