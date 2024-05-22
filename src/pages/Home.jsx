import React from "react";
import { motion } from "framer-motion";
import hero_truck from "../assets/images/hero-truck.jpg";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import About from "../components/about/About";
import Why_choose_us from "../components/why_choose_us/Why_choose_us";
import Services from "../components/services/Services";
import Testimonial from "../components/testimonial/Testimonial";
import Pricing from "../components/pricing/Pricing";
import ContactUs from "../components/contactUs/ContactUs";

const Home = () => {
  return (
    <>
      {/* Hero Section   */}
      <div className="relative w-full md:h-[900px] mb-[100px]">
        <img
          src={hero_truck}
          alt="Hero Truck"
          className="w-full h-[700px] md:h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <motion.div
          className="absolute inset-0 top-[170px] xl:left-52 lg:left-16"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="w-full md:container">
            <motion.h1
              className="hero-content w-[350px] md:w-[900px] text-[32px] md:text-[80px] text-white font-[800] tracking-normal mb-[30px] leading-[50px] md:leading-[100px]"
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, delay: 0.5 }}
            >
              We Deal In All Kinds Of{" "}
              <span className="text-blue-700">Logistics</span> and{" "}
              <span className="text-blue-700">Freight</span> Management
            </motion.h1>
            <motion.p
              className="hero-content w-[350px] md:w-[800px] text-[18px] md:text-[22px] tracking-widest text-white font-[300] mb-[60px]"
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, delay: 0.5 }}
            >
              Delivering Efficiency, One mile at a time.
            </motion.p>
            <Link to="/explore">
              <motion.button
                className="hero-content w-[200px] h-[60px] border-[1px] border-[#1b265b] border-solid rounded-xl tracking-[3px] font-[600] text-[20px] text-center bg-blue-700 text-white mt-1"
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 0.5 }}
              >
                Contact Us
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
      {/* Hero Section   */}
      <Element name="about">
        <About />
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Element name="why_choose_us">
        <Why_choose_us />
      </Element>
      <Element name="pricing">
        <Pricing />
      </Element>
      <Element name="testimonial">
        <Testimonial />
      </Element>

      <ContactUs />
    </>
  );
};

export default Home;
