import React, { Component } from "react";

const HeaderBottom = ({ wind, units }) => (
  <div className="header__bottom__wrap">
    <span>{Math.round(wind)} {units === 'metric' ? ('м/c') :( 'мiles/h')}</span>
  </div>
);

export default HeaderBottom;
