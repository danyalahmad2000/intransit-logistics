import React, { useRef, useEffect, useState } from "react";
import aboutImg from "../../assets/images/about.jpg";
import "./About.css";

const About = () => {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (aboutRef.current && !hasAnimated) {
        const top = aboutRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight && top > 0) { // Element starts to be visible in the viewport
          setIsVisible(true);
          setHasAnimated(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check in case the component is already in view

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasAnimated]);

  return (
    <div ref={aboutRef} className="container flex flex-col md:flex-row justify-between mx-auto mb-[100px]">
      <div className={`w-full md:w-1/2 flex justify-center ${isVisible ? 'slide-from-left' : ''}`}>
        <img
          src={aboutImg}
          alt=""
          className="w-[350px] md:w-[600px] h-[800px] object-cover rounded-[50px]"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col mt-5 md:mt-0 leading-[40px] md:leading-[70px]">
        <h2 className={`font-[400] text-blue-700 text-[18px] md:text-[28px] ml-5 md:ml-0 mr-5 md:mr-0 ${isVisible ? 'slide-from-bottom' : ''}`}>
          About Us
        </h2>
        <h1 className={`text-[32px] md:text-[64px] font-[700] mb-5 ml-5 md:ml-0 mr-5 md:mr-0 ${isVisible ? 'slide-from-right' : ''}`} >
          Our Mission Is To <span className="text-blue-700">Redefine</span>
        </h1>
        <p className={`text-[18px] md:text-[20px] font-[300] leading-7 md:leading-10 ml-5 md:ml-0 mr-5 md:mr-0 ${isVisible ? 'slide-from-left' : ''}`}>
          Welcome to Intransit Logistics, your premier partner in comprehensive
          logistics solutions. Specializing in dispatching services and freight
          management, we go above and beyond to streamline your transportation
          operations. At Intransit Logistics, we understand the critical role of
          efficient dispatching and meticulous freight management in the success
          of your business. With our expert team at the helm, you can trust us
          to optimize routes, coordinate shipments, and ensure timely
          deliveries, all while minimizing costs and maximizing efficiency.
          Whether you're a small business or a large corporation, our
          personalized approach and dedication to excellence ensure that your
          logistics needs are met with precision and reliability. Partner with
          Intransit Logistics today and experience the difference firsthand as
          we propel your business towards success.
        </p>
      </div>
    </div>
  );
};

export default About;
