import React, { Component } from 'react';

import { getCoords } from '../services/dom';
import { getForecast } from '../services/weather';
import { getLocation } from '../services/location';
import WidgetHeader from './WidgetHeader';
import WidgetBottom from './WidgetBottom';
import widgetPositionInline from '../enums/widget-positions-inline';
import widgetPositionClass from '../enums/widget-positions-classes';
import style from '../styles/style.scss';

export default class WeatherWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherforecast: [],
      weather: [],
      city: '',
      icon: '',
      isLoading: true
    };
    this.lastTap = null;
    this.widgetRef = React.createRef();
  }

  startDrag = e => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if (this.lastTap && now - this.lastTap < DOUBLE_PRESS_DELAY) {
      return this.setDefaultPosition();
    }
    this.lastTap = now;
    const coords = getCoords(this.widgetRef.current);
    const shiftX = e.pageX - coords.left;
    const shiftY = e.pageY - coords.top;

    this.widgetRef.current.style.position = 'absolute';
    document.body.appendChild(this.widgetRef.current);

    this.moveEl = e => {
      this.widgetRef.current.style.left = e.pageX - shiftX + 'px';
      this.widgetRef.current.style.top = e.pageY - shiftY + 'px';
    };

    this.moveEl(e);
    this.widgetRef.current.style.zIndex = 1000;
    document.onmousemove = e => {
      this.moveEl(e);
    };

    this.widgetRef.current.onmouseup = () => {
      document.onmousemove = null;
      this.widgetRef.current.onmouseup = null;
    };
  };

  onDragStart = () => false;

  setDefaultPosition = () => {
    this.widgetRef.current.style = widgetPositionInline[this.props.position];
  };

  componentDidMount = () => {
    this.getWeather();
  };

  getWeather = async () => {
    try {
      const API_KEY = this.props.apiKey;

      const location = this.props.location
        ? `q=${this.props.location}`
        : await getLocation();

      const forecast = await getForecast(
        location,
        API_KEY,
        this.props.units,
        this.props.lang
      );

      this.setState({
        weather: forecast.data.list[0],
        weatherforecast: forecast.data.list.slice(1),
        city: forecast.data.city.name,
        icon: forecast.data.list[0].weather[0].icon,
        wind: forecast.data.list[0].wind.speed,
        isLoading: false
      });
    } catch (error) {
      console.log(error);
    }
  };
  render = () => {
    return (
      <div
        ref={this.widgetRef}
        onDoubleClick={this.setDefaultPosition}
        className={`weather-widget ${widgetPositionClass[this.props.position]}`}
      >
        <div
          className="draggable-block"
          onDragStart={this.onDragStart}
          onMouseDown={this.startDrag}
        />
        {this.state.isLoading ? (
          <h3>Loading...</h3>
        ) : (
          <WidgetHeader
            city={this.state.city}
            weather={this.state.weather.weather}
            icon={this.state.icon}
            wind={this.state.wind}
            unit={this.props.units}
          />
        )}
        {!this.state.isLoading && (
          <WidgetBottom
            forecast={this.state.weatherforecast}
            weather={this.state.weather}
            units={this.props.units}
            lang={this.props.lang}
          />
        )}
      </div>
    );
  };
}

WeatherWidget.defaultProps = {
  position: 'top-left',
  units: 'metric',
  lang: 'eng'
};
