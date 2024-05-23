import React, { useEffect, useState, useRef } from "react";
import service1 from "../../assets/images/service1.jpg";
import service2 from "../../assets/images/service2.svg";
import service3 from "../../assets/images/service3.jpg";
import service4 from "../../assets/images/service4.jpg";
import "./Services.css";

const Services = () => {
  const servicesRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (servicesRef.current && !hasAnimated) {
        const top = servicesRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight && top > 0) {
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
    <div ref={servicesRef} className="w-full flex flex-col justify-center text-center mt-5 mb-[100px] md:mt-0 mx-auto bg-slate-100">
      <h2 className={`font-[400] text-blue-700 text-[18px] md:text-[28px] ml-2 md:ml-0 mr-2 md:mr-0 mt-10 ${isVisible ? 'slide-from-bottom' : ''}`}>
        Our Services
      </h2>
      <h1 className={`text-[32px] md:text-[64px] font-[700] mb-5 ml-2 md:ml-0 mr-2 md:mr-0 ${isVisible ? 'slide-from-bottom' : ''}`}>
        We Will Provide The Best <span className="text-blue-700">Services</span>
      </h1>

      <div className="container mx-auto mt-10 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[service1, service2, service3, service4].map((service, index) => (
            <div key={index} className="flex flex-col justify-center gap-5">
              <img
                src={service}
                alt=""
                className={`w-full h-64 rounded-3xl object-cover airiness ${isVisible ? 'slide-from-left' : ''}`}
                loading="lazy" // Lazy loading
              />
              <h1 className={`text-center text-[24px] font-[700] ${isVisible ? 'slide-from-right' : ''}`}>
                {["Load Planning", "Customer Support", "Scheduling", "Documentation Management"][index]}
              </h1>
              <p className={`text-center text-[16px] leading-6 ${isVisible ? 'slide-from-left' : ''}`}>
                {[
                  "Strategically organizing shipments to maximize vehicle capacity and efficiency.",
                  "Providing support and communication to resolve any issues that arise during transit.",
                  "Arranging pickup & delivery times to align with customer needs and operational schedules.",
                  "Handling paperwork, such as bills of lading, customs documentation, & delivery receipts."
                ][index]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
