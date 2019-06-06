import { getWeather } from "../api/weather";

export const getForecast = async (location, key, units, lang) => {
    const forecast = getWeather(location, key, units, lang);
    return forecast;
}