import React from "react";
import tqlImg from "../../assets/images/tql.png";
import jbhuntImg from "../../assets/images/jbhunt.png";
import amazon_relay from "../../assets/images/amazon_relay.png";
import globaltranz from "../../assets/images/globaltranz.png";
import millhouse from "../../assets/images/millhouse.png";
import ch_robinson from "../../assets/images/ch_robinson.png";

const Partners = () => {
  // Array of partner images
  const partnerImages = [tqlImg, jbhuntImg, amazon_relay, globaltranz, millhouse, ch_robinson];

  return (
    <div className="w-full mb-[100px]">
      <div className="container mx-auto flex flex-col">
        <h1 className="text-[32px] text-center md:text-[64px] font-[700] mb-10 ml-2 md:ml-0 mr-2 md:mr-0">
          Our Partnered Brokerage <span className="text-blue-700">Companies</span>
        </h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-4 items-center">
        {partnerImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Partner ${index + 1}`}
            className="w-[300px] object-cover md:ml-24"
          />
        ))}
      </div>
    </div>
  );
};

export default Partners;