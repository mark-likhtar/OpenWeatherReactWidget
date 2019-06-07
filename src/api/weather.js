import axios from 'axios';

export const getWeather = async (location, key, units, lang) => {
  return await axios.get(
    `http://api.openweathermap.org/data/2.5/forecast?${location}&appid=${key}&units=${units}&lang=${lang}`
  );
};