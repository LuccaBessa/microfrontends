import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";

import "./index.scss";
import { Home } from "./pages/home";

const App = () => (
  <BrowserRouter>
    <Home />
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
