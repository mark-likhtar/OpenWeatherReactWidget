import axios from 'axios';

export const getWeather = async (location, API_KEY, units, lang) => {
  return await axios.get(
    `http://api.openweathermap.org/data/2.5/forecast?${location}&appid=${API_KEY}&units=${units}&lang=${lang}`
  );
};