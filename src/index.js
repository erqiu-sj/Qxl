import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";
import App from "./Page/Index/App";
const Root = document.querySelector("#root");
render(
  <Router>
    <App />
  </Router>,
  Root
);
