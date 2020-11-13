import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/project" component={Project} />
            <Route path="/contact" component={Contact} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
