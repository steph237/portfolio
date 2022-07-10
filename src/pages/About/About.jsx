import React from "react";
import Stephy from "../../stephy.jpeg";
import Pie from "../../pie.png";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-content flex space-x-10">
        <div className="about-info ">
          <h1>About </h1>
          <h2>
            {" "}
            I am a product designer and front end developer based in Bamenda,
            Cameroon{" "}
          </h2>
          <br />
          <p className="text-xl inline">
            {" "}
            I am passionate about bringing out creative designs that convey
            special messages to the general public. I am currently pursuing a
            Masters in engineering degree in Computer Engineering in the
            University of Bamenda.
            <br />
            <br />
            When I am not designing or coding, you will find me cooking swimming
            or writting poems
          </p>
          <div>
            {" "}
            <button class="mt-8 bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              View CV
            </button>
          </div>
        </div>
        <div>
          {" "}
          <img className="image" src={Stephy} alt="background" />
        </div>
      </div>
      <hr size="20" align="center" />
      <div className="data-pie ">
        <div className="part-designer">
          <h3>Part designer</h3>
          <ul>
            <li>UI design </li>
            <li>UX design</li>
            <li>Accessible designs</li>
            <li>Interaction design</li>
          </ul>
        </div>
        <div className="piechart">
          {" "}
          <img src={Pie} alt="background" />
        </div>
        <div className="part-developer">
          <h3>Part developer</h3>
          <ul>
            <li>Front-end development</li>
            <li>HTML / CSS</li>
            <li>React Js</li>
            <li>Vue Js</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default About;
