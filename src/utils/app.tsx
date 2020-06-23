import React, { Fragment } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../home/home.component";
import Navbar from "../navbar/navbar.component";
import Events from "../events/events.component";

export const app = (
  <Router>
    <Navbar />
    <Home />
    <Events />
  </Router>
);
