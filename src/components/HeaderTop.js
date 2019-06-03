import React, { useState, useEffect } from "react";
import moment from "moment";

const HeaderTop = ({ city, weather }) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }
  return (
    <div className="header__top__wrap">
      <span>{weather[0].description}</span>
      <div className="city__info">
        <span>{city}</span>
        <span>{moment(date).format("H:mm")}</span>
      </div>
    </div>
  )
};

export default HeaderTop;
