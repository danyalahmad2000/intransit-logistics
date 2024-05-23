import React, { useEffect, useState, useRef } from "react";
import hero_truck from "../assets/images/hero-truck.jpg";
import { Element, scroller } from "react-scroll"; // Import scroller from react-scroll
import About from "../components/about/About";
import WhyChooseUs from "../components/why_choose_us/Why_choose_us";
import Services from "../components/services/Services";
import Testimonial from "../components/testimonial/Testimonial";
import Pricing from "../components/pricing/Pricing";
import ContactUs from "../components/contactUs/ContactUs";
import Partners from "../components/partners/Partners";
import "../styles/Home.css";

const Home = () => {
  const heroRef = useRef(null);
  const [heroVisible, setHeroVisible] = useState(false);
  const [heroAnimated, setHeroAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current && !heroAnimated) {
        const top = heroRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight && top > 0) {
          setHeroVisible(true);
          setHeroAnimated(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check in case the component is already in view

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [heroAnimated]);

  const scrollToContactUs = () => {
    scroller.scrollTo("contactUs", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <>
      {/* Hero Section */}
      <div ref={heroRef} className="relative w-full md:h-[900px] mb-[100px]">
        <img
          src={hero_truck}
          alt="Hero Truck"
          className="w-full h-[700px] md:h-full object-cover"
        />
        <div className="w-full absolute inset-0 bg-black opacity-70"></div>
        <div className="absolute inset-0 top-[170px] xl:left-52 lg:left-16">
          <div className="container pl-2">
            <h1
              className={`w-[350px] md:w-[900px] text-[32px] md:text-[80px] text-white font-[800] tracking-normal mb-[30px] leading-[50px] md:leading-[100px] ${
                heroVisible ? "slide-from-left" : ""
              }`}
            >
              We Deal In All Kinds Of{" "}
              <span className="text-blue-700">Logistics</span> and{" "}
              <span className="text-blue-700">Freight</span> Management
            </h1>
            <p
              className={`w-[350px] md:w-[800px] text-[18px] md:text-[22px] tracking-widest text-white font-[300] mb-[60px] ${
                heroVisible ? "slide-from-right" : ""
              }`}
            >
              Delivering Efficiency, One mile at a time.
            </p>
            <button
              onClick={scrollToContactUs}
              className="w-[200px] h-[60px] border-[1px] border-[#1b265b] border-solid rounded-xl tracking-[3px] font-[600] text-[20px] text-center bg-blue-700 text-white mt-1 airiness"
            >
              Contact Us
            </button>
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
      <Element name="contactUs">
        <ContactUs />
      </Element>
    </>
  );
};

export default Home;
