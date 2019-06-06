import React, { Component } from 'react';
import axios from 'axios';

import { getForecast } from '../services/weather';
import { getLocation } from "../services/location";
import WidgetHeader from './WidgetHeader';
import WidgetBottom from './WidgetBottom';
import widgetPosition from '../enums/widget-positions';
import style from '../styles/style.scss';

export default class WeatherWidget extends Component {
  state = {
    weatherforecast: [],
    weather: [],
    city: '',
    icon: '',
    isLoading: true
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

      const forecast = await getForecast(location, API_KEY, this.props.units, this.props.lang);
      
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
      <div className={`weather-widget ${widgetPosition[this.props.position]}`}>
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
