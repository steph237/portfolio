import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import Form from "../../components/Form";
// import { Facebook } from "@mui/icons-material";

const Contact = () => {
  return (
    <div className="about">
      <div className="about-content">
        <div className="about-info ">
          <h1>Contact</h1>
          <h2> Send an Email or let's connect on social media </h2>
          <br />
          <div
            className=" 
                flex text-gray-600 space-x-9 mt-2 hidden md:block"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="hover:text-red-800 hover:scale-110"
            ></FontAwesomeIcon>

            <FontAwesomeIcon
              icon={faInstagram}
              className="hover:text-red-800 hover:scale-110"
            ></FontAwesomeIcon>

            <FontAwesomeIcon
              icon={faFacebook}
              className="hover:text-red-800 hover:scale-110"
            ></FontAwesomeIcon>
          </div>
        </div>

        <Form />
      </div>
    </div>
  );
};
export default Contact;
