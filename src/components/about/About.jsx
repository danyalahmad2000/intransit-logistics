import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import aboutImg from "../../assets/images/about.jpg";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5// Adjust threshold as needed
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const imgVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <div
      ref={ref}
      className="container flex flex-col md:flex-row justify-between mx-auto mb-[100px]"
    >
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={aboutImg}
          alt=""
          className="w-[350px] md:w-[600px] h-[800px] object-cover rounded-[50px] mr-5"
          variants={imgVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 1, delay: 1 }}
        />
      </motion.div>
      <motion.div
        className="w-full md:w-1/2 flex flex-col mt-5 md:mt-0 leading-[40px] md:leading-[70px]"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 1, delay: 1 }}
      >
        <h2 className="font-[400] text-blue-700 text-[18px] md:text-[28px] ml-2 md:ml-0 mr-2 md:mr-0">
          About Us
        </h2>
        <h1 className=" text-[32px] md:text-[64px] font-[700] mb-5 ml-2 md:ml-0 mr-2 md:mr-0">
          Our Mission Is To <span className="text-blue-700">Redefine</span>
        </h1>
        <motion.p
          className="text-[18px] md:text-[20px] font-[300] leading-7 md:leading-10 ml-2 md:ml-0 mr-2 md:mr-0"
          variants={textVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 1, delay: 1}}
        >
          Welcome to Intransit Logistics, your premier partner in comprehensive logistics solutions. Specializing in dispatching services and freight management, we go above and beyond to streamline your transportation operations. At Intransit Logistics, we understand the critical role of efficient dispatching and meticulous freight management in the success of your business. With our expert team at the helm, you can trust us to optimize routes, coordinate shipments, and ensure timely deliveries, all while minimizing costs and maximizing efficiency. Whether you're a small business or a large corporation, our personalized approach and dedication to excellence ensure that your logistics needs are met with precision and reliability. Partner with Intransit Logistics today and experience the difference firsthand as we propel your business towards success.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default About;
