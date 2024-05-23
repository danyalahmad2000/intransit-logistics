import React, { useEffect, useState, useRef } from "react";
import "./Pricing.css";

const Pricing = () => {
  const pricingRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (pricingRef.current && !hasAnimated) {
        const top = pricingRef.current.getBoundingClientRect().top;
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
    <>
    <section
      ref={pricingRef}
      className="bg-gray-900 overflow-hidden relative"
    >
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className={`mx-auto max-w-screen-md text-center mb-8 lg:mb-12 ${isVisible ? 'slide-from-bottom' : ''}`}>
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Designed for business teams like yours
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Here at Intransit Logistics we focus on markets where technology,
              innovation, and capital can unlock long-term value and drive
              economic growth.
            </p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            <div className={`flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white ${isVisible ? 'left-card-animation' : ''}`}>
              <h3 className="mb-4 text-2xl font-semibold">Flatbed's</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                53 ft. Flatbeds
              </p>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                40-44 ft. Hotshots
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">5%</span>
                <span className="text-gray-500 dark:text-gray-400">/Load</span>
              </div>
              <p className="font-light text-white sm:text-lg">OR</p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">$450</span>
                <span className="text-gray-500 dark:text-gray-400">/Week</span>
              </div>

              <a
                href="#"
                className="text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
              >
                Get started
              </a>
            </div>
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">
                Straight Box Trucks
              </h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                24-28 ft. Box Truck
              </p>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                24-28 ft. Reefer Box Truck
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">8%</span>
                <span className="text-gray-500 dark:text-gray-400">/Load</span>
              </div>
              <p className="font-light text-white sm:text-lg">OR</p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">$350</span>
                <span className="text-gray-500 dark:text-gray-400">/Week</span>
              </div>

              <a
                href="#"
                className="text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
              >
                Get started
              </a>
            </div>
            <div className={`flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white ${isVisible ? 'right-card-animation' : ''}`}>
              <h3 className="mb-4 text-2xl font-semibold">Semi Trucks</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                48-53 ft. Dry Vans
              </p>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                48-53 ft. Reefer Vans
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">5%</span>
                <span className="text-gray-500 dark:text-gray-400">/Load</span>
              </div>
              <p className="font-light text-white sm:text-lg">OR</p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">$450</span>
                <span className="text-gray-500 dark:text-gray-400">/Week</span>
              </div>

              <a
                href="#"
                className="text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
