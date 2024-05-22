import React, { useEffect } from "react";
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
  useEffect(() => {
    const heroElements = document.querySelectorAll(
      ".hero-h1, .hero-p, .hero-button"
    );

    const options = {
      threshold: 0.5, // Trigger when 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    }, options);

    heroElements.forEach((element) => {
      observer.observe(element);
    });

    // Clean up
    return () => {
      heroElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

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
          <div className="w-full md:container">
            <h1 className="hero-h1 w-[350px] md:w-[900px] text-[32px] md:text-[80px] text-white font-[800] tracking-normal mb-[30px] leading-[50px] md:leading-[100px]">
              We Deal In All Kinds Of{" "}
              <span className="text-blue-700">Logistics</span> and{" "}
              <span className="text-blue-700">Freight</span> Management
            </h1>
            <p className="hero-p w-[350px] md:w-[800px] text-[18px] md:text-[22px] tracking-widest text-white font-[300] mb-[60px]">
              Delivering Efficiency, One mile at a time.
            </p>
            <Link to="/explore">
              <button className="hero-button w-[200px] h-[60px] border-[1px] border-[#1b265b] border-solid rounded-xl tracking-[3px] font-[600] text-[20px] text-center bg-blue-700 text-white mt-1">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
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
