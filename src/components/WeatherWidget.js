import React, { Component } from "react";
import axios from "axios";

import Header from "./Header";
import Footer from "./Footer";
import widgetPosition from "../Service/styleService";
import icons from '../sass/weather-icons.min.scss'
import style from "../style.scss";

export default class WeatherWidget extends Component {
  state = {
    weatherforecast: [],
    weather: [],
    city: "",
    icon: "",
    isLoading: true
  };

  componentDidMount = () => {
    this.getWeather();
  };

  getPosition = async () => {
    return await new Promise(resolve => {
      navigator.geolocation.getCurrentPosition(position => {
        resolve(
          `lat=${position.coords.latitude}&lon=${position.coords.longitude}`
        );
      });
    });
  };

  getWeather = async () => {
    try {
      const API_KEY = this.props.apiKey;

      const location = this.props.location
        ? `q=${this.props.location}`
        : await this.getPosition();

      const forecast = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?${location}&appid=${API_KEY}&units=${
        this.props.units}&lang=${this.props.lang}`
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
  render() {
    return (
      <div
        className="weatherWidget"
        style={widgetPosition[this.props.position]}
      >
        {this.state.isLoading ? (
          <h3>Loading...</h3>
        ) : (
            <Header
              city={this.state.city}
              weather={this.state.weather.weather}
              icon={this.state.icon}
              wind={this.state.wind}
              units={this.props.units}
            />
          )}
        {!this.state.isLoading && (
          <Footer
            forecast={this.state.weatherforecast}
            weather={this.state.weather}
            units={this.props.units}
            lang={this.props.lang}
          />
        )}
      </div>
    );
  }
}

WeatherWidget.defaultProps = {
  position: "top-left",
  units: "metric",
  lang: "eng"
};
