import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import icons from '../enums/icons';
import Svg from 'react-inlinesvg';

const WidgetHeader = ({ city, wind, icon, units, weather }) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let timerID = setInterval(() => setDate(new Date()), 60 * 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  }, [date]);

  return (
    <div className="header-wrap">
      <div className="header-top-wrap">
        <span>{weather[0].description}</span>
        <div className="city-info">
          <span>{city}</span>
          <span>{moment(date).format('H:mm')}</span>
        </div>
      </div>
      <Svg className="header__weather-icon" src={icons[icon]} />
      <div className="header-bottom-wrap">
        <span>
          {Math.round(wind)} {units === 'metric' ? 'м/c' : 'мiles/h'}
        </span>
      </div>
    </div>
  );
};

WidgetHeader.propTypes = {
  city: PropTypes.string,
  units: PropTypes.string,
  wind: PropTypes.number,
  icon: PropTypes.string,
  weather: PropTypes.array
};

export default WidgetHeader;
