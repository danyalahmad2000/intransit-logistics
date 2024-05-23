import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from "../../assets/images/logo.svg";

const Footer = () => {
  return (
    <footer className="w-full my-10">
      <div className="container mx-auto flex flex-col md:flex-row items-left md:items-center justify-between">

        <div className="w-full md:w-2/6 flex flex-col">

          <div className="w-full flex flex-row items-center gap-[10px]">
            <img src={logo} alt="" className="w-[100px] h-full" />
            <div className="flex flex-col w-full">
              <p className="text-[24px] font-[700] mb-2">Intransit Logistics</p>
              <p>
                Efficient and reliable logistics solutions tailored to your
                needs. We ensure safe, timely transport of your goods. Contact
                us to streamline your logistics operations.
              </p>
            </div>
          </div>

          <div className="flex mt-4 gap-4">
            {" "}
            {/* Add a flex container for the social icons */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-[24px] hover:text-blue-600" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-[24px] hover:text-pink-600" />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-[10px] md:gap-[100px] items-start mt-8 md:mt-0 tracking-[2px] pl-3 ">
          <div className="flex flex-row items-center gap-2">
            <IoIosCall className="text-[28px] text-blue-700" />
            <p className="">+1 (254)-256-2500</p>
          </div>

          <div className="flex flex-row items-center gap-2">
            <MdEmail className="text-[28px] text-blue-700" />
            <p className="">intransitlogistic@gmail.com</p>
          </div>

          <div className="flex flex-row items-center gap-2">
            <ImLocation className="text-[28px] text-blue-700" />
            <div className="flex flex-col gap-1">
              <p className="">1001 S.Main St. STE 500</p>
              <p className="">59901 Kalispell, MT</p>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
