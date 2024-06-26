import React from "react";
import {
  FaCarSide,
  FaHeadphonesAlt,
  FaCheckCircle,
  FaWallet,
} from "react-icons/fa";

import Marquee from "react-fast-marquee";

const Services = () => {
  const ServiceData = [
    {
      id: 1,
      icon: <FaCarSide className='text-4xl md:text-5xl text-primary' />,
      title: "Free Shipping",
      desc: "Free Shipping on All Order",
    },
    {
      id: 2,
      icon: <FaCheckCircle className='text-4xl md:text-5xl text-primary' />,
      title: "Safe Money",
      desc: "30 Days Money Back",
    },
    {
      id: 3,
      icon: <FaWallet className='text-4xl md:text-5xl text-primary' />,
      title: "Secure Payment",
      desc: "All payment Secure",
    },
    {
      id: 4,
      icon: <FaHeadphonesAlt className='text-4xl md:text-5xl text-primary' />,
      title: "Online Support 24/7",
      desc: "Technical Support 24/7",
    },
  ];
  return (
    <div>
      <Marquee direction='right' speed={100}>
        <div className='container mt-10 md:my-20'>
          <div
            className='grid grid-cols-2 lg:grid-cols-4 gap-4
        gap-y-8'
          >
            {ServiceData.map((data) => (
              <div className='flex flex-col items-start sm:flex-row gap-4'>
                {data.icon}
                <div>
                  <h1 className='lg:text-xl font-bold'>{data.title}</h1>
                  <h1 className='text-gray-400 text-sm'>{data.desc}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Services;
