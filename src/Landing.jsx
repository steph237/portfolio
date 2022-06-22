// import React, { useState, useEffect } from "react";
import Steph from "./steph.png";
import "./index.css";
import Portfoliocard from "./components/Portfoliocard/Portfolio";
import Footer from "./components/Footer/Footer";

const Landing = () => {
  return (
    <div className="app relative">
      <div className="backgroundDiv">
        <img src={Steph} alt="background" className="center" />
      </div>
      <div className=" main-container flex   ">
        <div className="leftContainer flex flex-col place-content-center">
          <div className="pb-2">
            <h1 className="design">Design</h1>
          </div>
          <div className="pb-4">
            <span>
              Product designer specialising in Ui <br /> and Ux deign systems
            </span>
          </div>
          <div>
            <div className="flex space-x-2 justify-center">
              <button
                type="button"
                class="inline-block 
          px-6 py-2
           border-2 border-red-800 
           text-red-800 font-medium 
           text-xs
            leading-tight 
            uppercase 
            rounded 
            hover:bg-black
             hover:bg-opacity-5 
             focus:outline-none 
             focus:ring-0 
             transition 
             duration-150 
             ease-in-out"
              >
                Discover more
              </button>
            </div>
          </div>
        </div>
        <div className="rightContainer flex flex-col place-content-center">
          <div className="pb-2">
            <h1 className="coder pb-2"> Code</h1>
          </div>
          <div className="pb-4">
            <span>
              Front end developer enthusiastic about <br /> writing clean and
              efficient code
            </span>
          </div>
          <div>
            <div className="flex space-x-2 justify-center">
              <button
                type="button"
                class="inline-block 
          px-6 py-2
           border-2 border-white-800 
           text-white-800 font-medium 
           text-xs
            leading-tight 
            uppercase 
            rounded 
            hover:bg-black
             hover:bg-opacity-5 
             focus:outline-none 
             focus:ring-0 
             transition 
             duration-150 
             ease-in-out"
              >
                Discover more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="m-10">
        <div className="mb-10">
          {" "}
          <h2 className="text-3xl text-center"> Latest work </h2>
        </div>

        <div>
          <Portfoliocard />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Landing;
