import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import avatarImg1 from "../../assets/images/avatarImg1.jpg";
import avatarImg2 from "../../assets/images/avatarImg2.jpg";
import avatarImg3 from "../../assets/images/avatarImg3.jpg";
import avatarImg4 from "../../assets/images/avatarImg4.jpg";
import avatarImg5 from "../../assets/images/avatarImg5.jpg";
import avatarImg6 from "../../assets/images/avatarImg6.jpg";
import { HiStar } from "react-icons/hi";

const Testimonial = () => {
  return (
    <>
      <h1 className=" text-[32px] md:text-[64px] font-[700] mb-5 ml-2 md:ml-0 mr-2 md:mr-0 text-center mt-10">
            What Our Clients{" "}
            <span className="text-blue-700">Say</span>
          </h1>
      <div className="w-full bg-slate-100">
        <div className="my-[100px] lg:mt-[55px]  container mx-auto">
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide className="mb-10">
              <div className="py-[30px] px-5 rounded-3">
                <div className="flex items-center gap-[13px]">
                  <img
                    src={avatarImg1}
                    alt=""
                    className="size-[50px] rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                      Emily Smith
                    </h4>
                    <div className="flex items-center gap-[2px]">
                      <HiStar className="text-yellow-500 w-[18px] h-5" />
                      <HiStar className="text-yellow-500 w-[18px] h-5" />
                      <HiStar className="text-yellow-500 w-[18px] h-5" />
                      <HiStar className="text-yellow-500 w-[18px] h-5" />
                      <HiStar className="text-yellow-500 w-[18px] h-5" />
                    </div>
                  </div>
                </div>
                <p className="text-[16px] leading-7 mt-4 text-textColor font-400">
                  Intransit Logistics has truly elevated our logistics
                  operations with their exceptional dispatching services. Their
                  commitment to efficiency and accuracy has streamlined our
                  transportation processes, allowing us to focus on other
                  aspects of our business with peace of mind.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="py-[30px] px-5 rounded-3">
                <div className="flex items-center gap-[13px]">
                  <img
                    src={avatarImg3}
                    alt=""
                    className="size-[50px] rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                      James Johnson
                    </h4>
                    <div className="flex items-center gap-[2px]">
                      <HiStar className="text-yellow-500 w-[18px] h-5" />
                      <HiStar className="text-yellow-500 w-[18px] h-5" />
                      <HiStar className="text-yellow-500 w-[18px] h-5" />
                      <HiStar className="text-yellow-500 w-[18px] h-5" />
                      <HiStar className="text-yellow-500 w-[18px] h-5" />
                    </div>
                  </div>
                </div>
                <p className="text-[16px] leading-7 mt-4 text-textColor font-400">
                  Choosing Intransit Logistics for our truck dispatching needs
                  was one of the best decisions we made for our business. Their
                  professionalism, reliability, and attention to detail have
                  consistently exceeded our expectations. We couldn't be happier
                  with their services.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="py-[30px] px-5 rounded-3">
                <div className="flex items-center gap-[13px]">
                  <img
                    src={avatarImg2}
                    alt=""
                    className="size-[50px] rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                      Sarah Brown
                    </h4>
                    <div className="flex items-center gap-[2px]">
                      <HiStar className="text-yellow-500 w-[18px] h-5" />
                      <HiStar className="text-yellow-500 w-[18px] h-5" />
                      <HiStar className="text-yellow-500 w-[18px] h-5" />
                      <HiStar className="text-yellow-500 w-[18px] h-5" />
                      <HiStar className="text-yellow-500 w-[18px] h-5" />
                    </div>
                  </div>
                </div>
                <p className="text-[16px] leading-7 mt-4 text-textColor font-400">
                  We rely on Intransit Logistics for their reliable and
                  responsive dispatching services. Their team goes above and
                  beyond to meet our specific requirements, providing
                  exceptional support and communication throughout the process.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="py-[30px] px-5 rounded-3">
                <div className="flex items-center gap-[13px]">
                  <img
                    src={avatarImg4}
                    alt=""
                    className="size-[50px] rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                      Michael Davis
                    </h4>
                    <div className="flex items-center gap-[2px]">
                      <HiStar className="text-yellow-500 w-[18px] h-5" />
                      <HiStar className="text-yellow-500 w-[18px] h-5" />
                      <HiStar className="text-yellow-500 w-[18px] h-5" />
                      <HiStar className="text-yellow-500 w-[18px] h-5" />
                      <HiStar className="text-yellow-500 w-[18px] h-5" />
                    </div>
                  </div>
                </div>
                <p className="text-[16px] leading-7 mt-4 text-textColor font-400">
                  Intransit Logistics is our trusted partner for dispatching
                  services. Their expertise in load planning and carrier
                  management has saved us time and money. Their dedication to
                  customer satisfaction is evident in every shipment.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="py-[30px] px-5 rounded-3">
                <div className="flex items-center gap-[13px]">
                  <img
                    src={avatarImg5}
                    alt=""
                    className="size-[50px] rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                      Olivia Wilson
                    </h4>
                    <div className="flex items-center gap-[2px]">
                      <HiStar className="text-yellow-500 w-[18px] h-5" />
                      <HiStar className="text-yellow-500 w-[18px] h-5" />
                      <HiStar className="text-yellow-500 w-[18px] h-5" />
                      <HiStar className="text-yellow-500 w-[18px] h-5" />
                      <HiStar className="text-yellow-500 w-[18px] h-5" />
                    </div>
                  </div>
                </div>
                <p className="text-[16px] leading-7 mt-4 text-textColor font-400">
                  Working with Intransit Logistics for our truck dispatching
                  needs has been a game-changer. Their attention to detail and
                  proactive approach have minimized delays and maximized our
                  fleet's productivity. Highly recommended!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="py-[30px] px-5 rounded-3">
                <div className="flex items-center gap-[13px]">
                  <img
                    src={avatarImg6}
                    alt=""
                    className="size-[50px] rounded-full object-contain"
                  />
                  <div>
                    <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                      Martinez Santiago
                    </h4>
                    <div className="flex items-center gap-[2px]">
                      <HiStar className="text-yellow-500 w-[18px] h-5" />
                      <HiStar className="text-yellow-500 w-[18px] h-5" />
                      <HiStar className="text-yellow-500 w-[18px] h-5" />
                      <HiStar className="text-yellow-500 w-[18px] h-5" />
                      <HiStar className="text-yellow-500 w-[18px] h-5" />
                    </div>
                  </div>
                </div>
                <p className="text-[16px] leading-7 mt-4 text-textColor font-400">
                  Thanks to their efficient dispatching services, our delivery
                  times have improved significantly. Intransit Logistics has
                  been instrumental in optimizing our routes, ensuring timely
                  deliveries every time!
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* text will display under slider */}
        </div>
      </div>
    </>
  );
};

export default Testimonial;
