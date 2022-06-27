import React from "react";
import Stephy from "../../stephy.jpeg";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div>
        {" "}
        <img src={Stephy} alt="background" />
      </div>
      <div className="about-info ">
        <p className="text-xl inline">
          {" "}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, ex
          voluptatem sint, molestias itaque placeat dicta vitae repellendus
          ducimus quis quasi voluptate nemo nam excepturi harum facilis iure
          incidunt! Esse! Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Odit, ex voluptatem sint, molestias itaque placeat dicta vitae
          repellendus ducimus quis quasi voluptate nemo nam excepturi harum
          facilis iure incidunt! Esse! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Odit, ex voluptatem sint, molestias itaque placeat
          dicta vitae repellendus ducimus quis quasi voluptate nemo nam
          excepturi harum facilis iure incidunt! Esse!
        </p>
        <div>
          {" "}
          <button class="mt-8 bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            View CV
          </button>
        </div>
      </div>
    </div>
  );
};
export default About;
