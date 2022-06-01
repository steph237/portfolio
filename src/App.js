import React, { useState, useEffect } from "react";



import Steph from "./steph.png";


import Header from "./Header"
import "./index.css";

const App = () => {
  return (
    <div className="app">
    <Header/>
    
      <h1 className="text-3xl font-bold underline">Alpha Movies</h1>
      <div className= "backgroundDiv">
        <img src={Steph} alt="background"  className = "center"/>
      </div>
     
    </div>
  );
};

export default App;
