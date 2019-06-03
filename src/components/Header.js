import React, { Component } from "react";

import icons from '../Service/iconsService'
import HeaderTop from './HeaderTop';
import HeaderBottom from './HeaderBottom'

const Header = ({ city, wind, icon, units, weather }) => (
    <div className="header__wrapper">
        <HeaderTop
            city={city}
            weather={weather}
        />
        <i className={`wi ${icons[icon]}`}></i>
        <HeaderBottom
            units={units}
            wind={wind}
        />
    </div>
)

export default Header;