import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import chooseUsImg from "../../assets/images/chooseUsImg.jpg";
import { FaCheckCircle } from "react-icons/fa";

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5 // Adjust threshold as needed
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
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
        className="w-full md:w-1/2 flex flex-col mt-5 md:mt-0 leading-[40px] md:leading-[70px] order-2 md:order-1"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="font-[400] text-blue-700 text-[18px] md:text-[28px] ml-2 md:ml-0 mr-2 md:mr-0">
          Why Choose Us
        </h2>
        <h1 className=" text-[32px] md:text-[64px] font-[700] mb-5 ml-2 md:ml-0 mr-2 md:mr-0">
          We Deliver Unmatched{" "}
          <span className="text-blue-700">Excellence</span>
        </h1>
        <motion.p
          className="text-[18px] md:text-[20px] font-[300] leading-7 md:leading-10 ml-2 md:ml-0 mr-2 md:mr-0 mb-5"
          variants={textVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 1, delay: 0.7 }}
        >
          At Intransit Logistics, we stand out as your top choice for logistics
          solutions due to our unwavering commitment to excellence and
          innovation. Our team of seasoned professionals leverages cutting-edge
          technology and industry best practices to deliver seamless and
          efficient logistics services. We pride ourselves on our proactive
          approach, anticipating potential challenges and implementing
          strategies to mitigate them before they impact your business. Our
          customer-centric focus means we tailor our services to meet your
          specific needs, ensuring a personalized and responsive experience.
          Additionally, our robust network and strategic partnerships enable us
          to offer competitive rates and flexible solutions that scale with
          your business growth. Choose Intransit Logistics for reliable,
          efficient, and customized logistics solutions that drive your business
          forward.
        </motion.p>
        <motion.p
          className="flex flex-row items-center ml-2 md:ml-0"
          variants={textVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <FaCheckCircle className="md:size-[24px] mr-5 text-blue-700" />
          <p className="text-[16px] md:text-[20px] font-[600]">
            Professional and satisfied work for client
          </p>
        </motion.p>
        <motion.p
          className="flex flex-row items-center ml-2 md:ml-0"
          variants={textVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <FaCheckCircle className="md:size-[24px] mr-5 text-blue-700" />
          <p className="text-[16px] md:text-[20px] font-[600]">
            Best work dealing for client
          </p>
        </motion.p>
        <motion.p
          className="flex flex-row items-center ml-2 md:ml-0"
          variants={textVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 1, delay: 1.3 }}
        >
          <FaCheckCircle className="md:size-[24px] mr-5 text-blue-700" />
          <p className="text-[16px] md:text-[20px] font-[600]">
            Every client will be 100% satisfy
          </p>
        </motion.p>
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 flex justify-center order-1 md:order-2"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.img
          src={chooseUsImg}
          alt=""
          className="w-[350px] md:w-[600px] h-[900px] object-cover rounded-[50px]"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 1, delay: 0.7 }}
        />
      </motion.div>
    </div>
  );
};

export default WhyChooseUs;
