import { Fragment } from "react";
import { Disclosure, } from "@headlessui/react";
import {  MenuIcon, XIcon } from "@heroicons/react/outline";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {faLinkedin, faInstagram, faFacebook} from '@fortawesome/free-brands-svg-icons';

 
const navigation = [
 
  { name: "Portfolio", href: "#", current: false },
  { name: "About", href: "#", current: false},
  { name: "Contact", href: "#", current: false },
  
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


export default function Navbar() {
  return (
    <Disclosure as="nav" className="header">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8 shadow-lg">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-red-800 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6 " aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="headerContent  ">
                <div className="flex-shrink-0 flex items-center sm:ml-6">
                 <p className="text-2xl ml-6  ">MD</p>
               
                </div>
                <div className="hidden sm:block sm:ml-6 mr-0">
                  <div className=" flex space-x-9">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "text-red-800"
                            : "text-gray-600  hover:text-red-800 hover:scale-110",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>      
                </div>
                <div className=" 
                flex text-gray-600 space-x-9 mt-2 hidden md:block">
                
                <FontAwesomeIcon icon = {faLinkedin} className = "hover:text-red-800 hover:scale-110"></FontAwesomeIcon>
                <FontAwesomeIcon icon = {faInstagram} className = "hover:text-red-800 hover:scale-110"></FontAwesomeIcon>
                <FontAwesomeIcon icon = {faFacebook} className = "hover:text-red-800 hover:scale-110"></FontAwesomeIcon>
                 
                </div>
              </div>
              
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "text-red-800"
                      : "text-gray-600  hover:text-red-800 ",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}