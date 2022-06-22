import React from "react";
import "./portfoliocard.css";

const Portfoliocard = () => {
  return (
    <div className="card-container flex space-x-10 content-center">
      <div className="card">
        <div>
          <img src="https://source.unsplash.com/WLUHO9A_xik/1600x900"></img>
        </div>

        <div>
          <span>design</span>
          <h3> food delivery application</h3>
        </div>
      </div>

      <div className="card">
        <div>
          <img src="https://source.unsplash.com/WLUHO9A_xik/1600x900"></img>
        </div>

        <div>
          <span>design</span>
          <h3> food delivery application</h3>
        </div>
      </div>

      <div className="card">
        <div>
          <img src="https://source.unsplash.com/WLUHO9A_xik/1600x900"></img>
        </div>

        <div>
          <span>design</span>
          <h3> food delivery application</h3>
        </div>
      </div>
    </div>
  );
};

export default Portfoliocard;
