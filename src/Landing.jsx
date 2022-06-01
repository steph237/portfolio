import React, { useState, useEffect } from "react";
import Steph from "./steph.png";
import "./index.css";

const Landing = () => {
  return (
    <div className="app relative">
      <div className="backgroundDiv">
        <img src={Steph} alt="background" className="center" />
      </div>
      <div className=" flex ">
        <div className="leftContainer flex flex-col">
          <div>
            <h1>Designer</h1>
          </div>
          <div>
            <span>
              Product designer specialising in Ui and Ux deign systems
            </span>
          </div>
          <div>
            <button> gray
            </button>
          </div>
        </div>
        <div className="rightContainer  "></div>
      </div>
    </div>
  );
};
export default Landing;
