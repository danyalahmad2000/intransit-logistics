import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import logo from "../../assets/images/logo.svg";

const navLinks = [
  {
    to: "home",
    display: "Home",
  },
  {
    to: "about",
    display: "About",
  },
  {
    to: "services",
    display: "Services",
  },
  {
    to: "pricing",
    display: "Pricing",
  },
  
];

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header className="sticky-header">
      <div className="max-w-full flex md:pr-2 lg:pr-2">
        <div className="container mx-auto flex flex-row justify-between items-center">
          <div className="w-[175px] h-[80px] flex items-center justify-center">
            <img src={logo} alt="" className="w-full h-full text-white" />
          </div>
          <div className="hidden md:flex items-center">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                <ScrollLink
                  to={link.to}
                  className="font-[500] text-[16px] px-4 mx-10 cursor-pointer hover:text-blue-700 transition-all duration-300 ease-in-out hover:text-[20px] hover:font-bold"
                  spy={true}
                  smooth={true}
                  offset={-70} // adjust the offset as per your header's height
                  duration={500}
                >
                  {link.display}
                </ScrollLink>
              </div>
            ))}
          </div>

          <button className="w-[130px] h-[50px] border-[1px] border-blue-700 border-solid rounded-xl font-[500] text-[16px] text-center hover:text-white hover:bg-blue-700 md:block hidden items-center">
            <ScrollLink >Contact Us</ScrollLink>
          </button>
          
          <button className="md:hidden" onClick={toggleNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-auto mr-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {showNav && (
        <div className="bg-white w-full py-2 px-4 md:hidden">
          {navLinks.map((link, index) => (
            <ScrollLink
              key={index}
              to={link.to}
              className="block py-2 px-4 text-[14px] font-[800] text-center cursor-pointer"
              spy={true}
              smooth={true}
              offset={-70} // adjust the offset as per your header's height
              duration={500}
              onClick={toggleNav}
            >
              {link.display}
            </ScrollLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
