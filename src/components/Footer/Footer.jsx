// import React, { useState, useEffect } from "react";

import "./footer.css";

const Footer = () => {
  return (
    <div className="my-16 px-10">
      <hr size="20" align="center" />
      <footer className="p-4  mt-4 bg-white  md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022 Stephanie W. Nkwatoh . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="#"
              className="mr-4 hover:text-red-800 hover:scale-110 md:mr-6 "
            >
              Porfolio
            </a>
          </li>
          <li>
            <a
              href="#"
              className="mr-4 hover:text-red-800 hover:scale-110 md:mr-6"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="mr-4 hover:text-red-800 hover:scale-110 md:mr-6"
            >
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </div>

    // <div className="footer-container">
    //   <hr size="20" align="center" />
    //   <div className="flex m-20 space-x-96 flex-none sm:flex-1 md:flex-auto lg:flex-initial xl:flex-1 ">
    //     <span> 2022 Stephanie W. Nkwatoh</span>
    //     <div className="footer items-end space-x-56 w-1/2 mr-0">
    //       <span> Porfolio</span>
    //       <span> About</span>
    //       <span> Contact</span>
    //     </div>
    //   </div>
    // </div>
  );
};
export default Footer;
