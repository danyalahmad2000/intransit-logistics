import React from "react";
import hero_truck from "../assets/images/hero-truck.jpg";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import About from "../components/about/About";
import WhyChooseUs from "../components/why_choose_us/Why_choose_us";
import Services from "../components/services/Services";
import Testimonial from "../components/testimonial/Testimonial";
import Pricing from "../components/pricing/Pricing";
import ContactUs from "../components/contactUs/ContactUs";
import Partners from "../components/partners/Partners";
import "../App.css"

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
        <div className="absolute inset-0 top-[170px] xl:left-52 lg:left-16">
          <div className="w-full md:container ml-5 md:ml-0">
            <h1 className="hero-content w-[350px] md:w-[900px] text-[32px] md:text-[80px] text-white font-[800] tracking-normal mb-[30px] leading-[50px] md:leading-[100px] slide-from-left">
              We Deal In All Kinds Of{" "}
              <span className="text-blue-700">Logistics</span> and{" "}
              <span className="text-blue-700">Freight</span> Management
            </h1>
            <p className="hero-content w-[350px] md:w-[800px] text-[18px] md:text-[22px] tracking-widest text-white font-[300] mb-[60px] slide-from-right">
              Delivering Efficiency, One mile at a time.
            </p>
            <Link to="/explore">
              <button className="hero-content w-[200px] h-[60px] border-[1px] border-[#1b265b] border-solid rounded-xl tracking-[3px] font-[600] text-[20px] text-center bg-blue-700 text-white mt-1 airiness">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <Element name="partners">
        <Partners />
      </Element>

      {/* About Section */}
      <Element name="about">
        <About />
      </Element>

      {/* Services Section */}
      <Element name="services">
        <Services />
      </Element>

      {/* Why Choose Us Section */}
      <Element name="why_choose_us">
        <WhyChooseUs />
      </Element>

      {/* Pricing Section */}
      <Element name="pricing">
        <Pricing />
      </Element>

      {/* Testimonial Section */}
      <Element name="testimonial">
        <Testimonial />
      </Element>

      {/* Contact Us Section */}
      <ContactUs />
    </>
  );
};

export default Home;
