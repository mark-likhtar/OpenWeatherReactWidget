import React from "react";
import { render } from "react-dom";

import App from "./components/App";
render(
  <App
    apiKey="7cc0a3060e58f17a24e70b46ad9ed851"
    position="top-left"
    location=""
    units="imperial"
  />,
  document.getElementById("app")
);
