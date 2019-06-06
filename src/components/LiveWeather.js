import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Svg from 'react-inlinesvg';

import tempUnits from '../enums/temp-units';
import icons from '../enums/icons';
import windUnits from '../enums/wind-units';

const LiveWeather = props => {
  return (
    <div className="live-weather-wrap">
      <div className="live-temp">
        <h2>
          {Math.round(props.weather.main.temp)}
          <sup>o</sup>
          {tempUnits[props.unit]}
        </h2>
        <span>
          {moment()
            .locale(`${props.lang}`)
            .format(`dddd D`)}
          <sup>
            {moment()
              .format(`Do`)
              .slice(1)}
          </sup>
        </span>
      </div>
      <div className="live-weather">
        <Svg
          className="live-weather__icon"
          src={icons[props.weather.weather[0].icon]}
        />
        <span className="live-weather__span">
          {Math.round(props.weather.wind.speed)}
          {windUnits[props.unit]} /{Math.round(props.weather.main.temp)}
          <sup>o</sup>
        </span>
      </div>
    </div>
  );
};

LiveWeather.propTypes = {
  weather: PropTypes.object,
  lang: PropTypes.string,
  unit: PropTypes.string
};

export default LiveWeather;
