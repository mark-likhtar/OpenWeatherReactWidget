import ScrollArea from "react-scrollbar";
import React from "react";

import WeatherForecast from "./WeatherForecast";

const WeatherForecastArea = ({ forecast, units }) => (
  <ScrollArea
    speed={2.8}
    className="area"
    contentClassName="content"
    horizontal={true}
    contentClassName={"long"}
  >
    <WeatherForecast forecast={forecast} units={units} />
  </ScrollArea>
);

export default WeatherForecastArea;
