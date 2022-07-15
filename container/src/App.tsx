import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import "./index.scss";
import { AuthProvider } from "container/useAuth";

const App = () => (
  <BrowserRouter>
      <AuthProvider>
        <Home />
      </AuthProvider>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("app"));
