import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Svg from 'react-inlinesvg';

import icons from '../enums/icons';

const ForecastItem = ({ item, units }) => {
  return (
    <div className="forecast-item">
      <span>{moment(`${item.dt_txt}`).format('D/MM')}</span>
      <span>{moment(`${item.dt_txt}`).format('H:mm')}</span>
      <Svg className="forecast-item__icon" src={icons[item.weather[0].icon]} />
      <span>
        {Math.round(item.main.temp)}
        <sup>o</sup>
        {units === 'imperial' && 'F'}
      </span>
    </div>
  );
};

export default ForecastItem;

ForecastItem.propTypes = {
  item: PropTypes.object,
  units: PropTypes.string
};
