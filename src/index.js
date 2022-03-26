import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "./utils/ThemeContext";
import { UserProvider } from "./utils/UserContext";
import { LoadingProvider } from "./utils/LoadingContext";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import {base_url} from './data/data'

axios.defaults.baseURL = base_url;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <LoadingProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </LoadingProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
