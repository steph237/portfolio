import React, { useState, useEffect } from "react";

import Header from "./components/Header/Header";
import Landing from "./Landing";
import "./index.css";

const App = () => {
  return (
    <div className="app">
      <Header />

      <Landing />
    </div>
  );
};

export default App;
