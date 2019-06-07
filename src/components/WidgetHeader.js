import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import icons from '../enums/icons';
import units from '../enums/wind-units';
import Svg from 'react-inlinesvg';

export default class WidgetHeader extends Component {
  state = {
    date: Date.now()
  };

  tick() {
    this.setState({
      date: Date.now()
    });
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 20000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="header-wrap">
        <div className="header-top-wrap">
          <span>{this.props.weather[0].description}</span>
          <div className="city-info">
            <span>{this.props.city}</span>
            <span>{moment(this.state.date).format('H:mm')}</span>
          </div>
        </div>
        <Svg className="header__weather-icon" src={icons[this.props.icon]} />
        <div className="header-bottom-wrap">
          <span>
            {Math.round(this.props.wind)} {units[this.props.unit]}
          </span>
        </div>
      </div>
    );
  }
}

WidgetHeader.propTypes = {
  city: PropTypes.string,
  unit: PropTypes.string,
  wind: PropTypes.number,
  icon: PropTypes.string,
  weather: PropTypes.array
};
