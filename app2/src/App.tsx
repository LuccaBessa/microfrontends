import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Home from "./pages/home";
import { AuthProvider } from "container/useAuth";

const App = () => (
  <AuthProvider>
    <Home />
  </AuthProvider>
);
ReactDOM.render(<App />, document.getElementById("app"));
