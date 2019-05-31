import React, { Component } from "react";
import moment from "moment";

const HeaderTop = ({ city }) => (
  <div className="header__top__wrap">
    <span>погодные условия</span>
    <div className="city__info">
      <span>{city}</span>
      <span>{moment().format("H:mm")}</span>
    </div>
  </div>
);

export default HeaderTop;
