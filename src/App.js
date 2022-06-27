import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Landing from "./pages/Landing";
import About from "./pages/About/About";
import "./index.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>

          <Route path="/About">
            <About />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
