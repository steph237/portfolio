import React from "react";
import Dropdown from "../../components/Dropdown";
import "../About/about.css";

import "./portfolio.css";

const Portfolio = () => {
  return (
    <div className="about">
      <div className="about-content flex space-x-10">
        <div className="about-info ">
          <h1>Portfolio </h1>
          <h2>
            {" "}
            Check out some of my latest UI/UX design case studies and web
            applications I contributed to{" "}
          </h2>
          <br />
          <p className="text-xl inline">
            {" "}
            I've worked at start-ups and freelanced on a range of different
            projects, including design systems, websites and applications. I
            have also contibuted to many open source projects
          </p>
        </div>
        <div>
          <Dropdown />
        </div>
      </div>
      <hr size="20" align="center" />
    </div>
  );
};
export default Portfolio;
