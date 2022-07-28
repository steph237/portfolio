import React from "react";
import Dropdown from "../../components/Dropdown";
import "../About/about.css";
import { useState } from "react";
import "./portfolio.css";
import Portfoliocard from "../../components/Portfoliocard/Portfolio";

const Portfolio = () => {
  const [selected, setSelected] = useState();

  return (
    <div className="about">
      <div className="about-content flex space-x-36">
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
        <div></div>

        <div>
          <select
            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
            onChange={(e) => setSelected(e.target.value || null)}
            value={selected || ""}
          >
            <option value="" selected disabled hidden>
              Sort Projects
            </option>

            <option value="1">UI/UX design projects</option>
            <option value="2">Applications </option>
          </select>
        </div>
      </div>
      <Portfoliocard />
      <hr size="20" align="center" />
    </div>
  );
};
export default Portfolio;
