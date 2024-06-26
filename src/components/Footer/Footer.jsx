import React from "react";
import { FoterLinks } from "../../constants/index2";
import {
  FaGoogle,
  FaInstagram,
  FaLocationArrow,
  FaVoicemail,
} from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=' dark:bg-gray-950'>
      <div className='container '>
        <div className='grid md:grid-cols-3 pb-20 pt-5'>
          {/*company details*/}

          <div className='   py-8 px-4'>
            <a href='#' className='text-primary tracking-widest '>
              <span className='text-5xl italic font-extrabold '>Pa</span> shop
            </a>
            <p className=' text-gray-600 lg:pr-24 pt-3 dark:text-white/70'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              architecto doloribus ea itaque sed. Consequatur quibusdam neque,
            </p>
            <p className=' text-gray-600 mt-4'>Made with ❤️ by Pa dev's</p>
          </div>
          {/*Footer links*/}
          <div className=' col-span-2  grid grid-cols-2 sm:grid-cols-3 md:pl-10  '>
            <div className=' py-8 px-0'>
              <h1 className=' text-xl font-bold sm:text-left mb-3'>
                Quick Links
              </h1>
              <ul className=' space-y-3'>
                {FoterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.Link}
                      className=' text-gray-600 hover:dark:text-white dark:text-gray-400 hover:text-black duration-300'
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='py-8 px-4 col-span-2 sm:col-auto'>
              <div>
                <h1 className=' text-xl font-bold sm:text-left mb-3'>Addres</h1>
                <div className='flex items-center gap-3'>
                  <FaLocationArrow />
                  <p>ETHIOPIA , addis-ababa</p>
                </div>
                <h1 className=' text-xl font-bold sm:text-left mt-3'>
                  Contact as
                </h1>
                <div className='flex items-center gap-3 mt-3'>
                  <FaMobileAlt />
                  <p>+251 985 24 14 04</p>
                </div>
                <div className='flex items-center gap-3 mt-6'>
                  <a href=''>
                    <FaInstagram className=' text-3xl hover:text-primary duration-300' />
                  </a>
                  <a href=''>
                    <FaGoogle className=' text-3xl hover:text-primary duration-300' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
