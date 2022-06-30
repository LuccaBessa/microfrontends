import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Home from "./pages/home";

const App = () => (
  <Home />
);
ReactDOM.render(<App />, document.getElementById("app"));
