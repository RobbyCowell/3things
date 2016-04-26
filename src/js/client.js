import React from "react";
import ReactDom from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import '../css/style.scss';

import Layout from "./pages/Layout";
import Tasks from "./pages/Tasks";

const app = document.getElementById('app');

ReactDom.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Tasks}></IndexRoute>
    </Route>
  </Router>,
app);
