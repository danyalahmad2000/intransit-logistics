import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import service1 from "../../assets/images/service1.jpg";
import service2 from "../../assets/images/service2.svg";
import service3 from "../../assets/images/service3.jpg";
import service4 from "../../assets/images/service4.jpg";

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5 // Adjust threshold as needed
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <motion.div
      ref={ref}
      className="w-full flex flex-col justify-center text-center mt-5 mb-[100px] md:mt-0 mx-auto bg-slate-100"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 1 }}
    >
      <h2 className="font-[400] text-blue-700 text-[18px] md:text-[28px] ml-2 md:ml-0 mr-2 md:mr-0 mt-10">
        Our Services
      </h2>
      <h1 className=" text-[32px] md:text-[64px] font-[700] mb-5 ml-2 md:ml-0 mr-2 md:mr-0">
        We Will Provide The Best{" "}
        <span className="text-blue-700">Services</span>
      </h1>

      <div className="container mx-auto mt-10 pb-10">
        <motion.div
          className="flex flex-col md:flex-row justify-between"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            className="size-[360px] flex flex-col justify-center gap-[20px] mb-[120px] md:mb-0"
            variants={itemVariants}
          >
            <img
              src={service1}
              alt=""
              className="w-full h-full rounded-3xl object-cover"
            />
            <h1 className="text-center text-[24px] font-[700]">
              Load Planning
            </h1>
            <p className="text-center text-[16px] leading-6">
              Strategically organizing shipments to maximize vehicle capacity
              and efficiency
            </p>
          </motion.div>

          <motion.div
            className="size-[360px] flex flex-col justify-center gap-[20px] mb-[120px] md:mb-0"
            variants={itemVariants}
          >
            <img
              src={service2}
              alt=""
              className="w-full h-full rounded-3xl object-cover"
            />
            <h1 className="text-center text-[24px] font-[700]">
              Customer Support
            </h1>
            <p className="text-center text-[16px] leading-6">
              Providing support and communication to resolve any issues that
              arise during transit.
            </p>
          </motion.div>

          <motion.div
            className="size-[360px] flex flex-col justify-center gap-[20px] mb-[120px] md:mb-0"
            variants={itemVariants}
          >
            <img
              src={service3}
              alt=""
              className="w-full h-full rounded-3xl object-cover"
            />
            <h1 className="text-center text-[24px] font-[700]">Scheduling</h1>
            <p className="text-center text-[16px] leading-6">
              Arranging pickup & delivery times to align with customer needs
              and operational schedules.
            </p>
          </motion.div>

          <motion.div
            className="size-[360px] flex flex-col justify-center gap-[20px] mb-[120px] md:mb-0"
            variants={itemVariants}
          >
            <img
              src={service4}
              alt=""
              className="w-full h-full rounded-3xl object-cover"
            />
            <h1 className="text-center text-[24px] font-[700]">
              Documentation Management
            </h1>
            <p className="text-center text-[16px] leading-6">
              Handling paperwork, such as bills of lading, customs
              documentation, & delivery receipts.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;
