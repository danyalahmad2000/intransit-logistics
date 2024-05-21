import React from "react";
import { Link } from "react-router-dom";
import { RiLinkedinFill } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa6";

const socialLinks = [
  {
    path: "https://www.linkedin.com/company/healthlink360-ai",
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.instagram.com/healthlink360.ai",
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
  },
];

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/explore",
    display: "Explore",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/about",
    display: "About Us",
  },
];

const quickLinks02 = [
  {
    path: "/",
    display: "Donate",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-16 pt-10">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px] px-10">
          <div className="w-full md:w-[500px]">
            <h1 className="text-[34px] mb-[20px] font-[700]">Assets Alley</h1>
            <p className="text-[16px] leading-7 font-[400] text-textColor mb-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vehicula felis eu diam interdum, quis dictum justo consequat.
              Vivamus sit amet metus non arcu venenatis interdum.
            </p>
            <p className="text-[16px] leading-7 font-[400] text-textColor">
              Copyright © {year}. All Rights Reserved.{" "}
            </p>

            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Quick Links
            </h2>

            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Support
            </h2>

            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-[400px]">
            <h1 className="text-[20px] mb-[20px] font-[700]">Subscribe</h1>
            <p className="text-[16px] leading-7 font-[400] text-textColor mb-[20px]">
              Subscribe to get the latest property and blog news from us.
            </p>
            <div className="flex items-center mx-auto">
              <input
                type="text"
                className="border w-[300px] h-[50px] rounded-[20px] pl-[15px] mr-3"
                placeholder="Email Address"
              />
              <div className="w-[50px] h-[50px] cursor-pointer bg-blue-800 rounded-full flex items-center justify-center">
                <FaArrowRight className="text-white size-[32px] cursor-pointer rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;