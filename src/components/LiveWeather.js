import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Svg from 'react-inlinesvg';

import icons from '../enums/icons';

const LiveWeather = props => {
  return (
    <div className="live-weather-wrap">
      <div className="live-temp">
        <h2>
          {Math.round(props.weather.main.temp)}
          <sup>o</sup>
          {props.units === 'imperial' && 'F'}
        </h2>
        <span className="dateSpan">
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
        <Svg className="live-weather__icon" src={icons[props.weather.weather[0].icon]} />
        <span>
          {Math.round(props.weather.wind.speed)}
          {props.units === 'metric' ? 'мc' : 'mph'} /{' '}
          {Math.round(props.weather.main.temp)}
          <sup>o</sup>
        </span>
      </div>
    </div>
  );
};

LiveWeather.propTypes = {
  weather: PropTypes.object,
  lang: PropTypes.string,
  units: PropTypes.string
}

export default LiveWeather;
