import React from "react";
import PropTypes from 'prop-types';

import LiveWeather from "./LiveWeather";
import WeatherForecastArea from "./WeatherForecastArea";

const WidgetBottom = ({ weather, forecast, units, lang }) => (
  <div className="footer-wrap">
    <LiveWeather weather={weather} unit={units} lang={lang}/>
    <WeatherForecastArea forecast={forecast} units={units}/>
  </div>
);

WidgetBottom.propTypes = {
  weather: PropTypes.object,
  forecast: PropTypes.array,
  lang: PropTypes.string,
  units: PropTypes.string
}

export default WidgetBottom;
