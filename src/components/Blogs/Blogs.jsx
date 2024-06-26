import React from "react";
import Heading from "../shared/Heading";
import { BlogData } from "../../constants/index2";

const Blogs = () => {
  return (
    <div className='my-12'>
      <div className='container'>
        {/*header secion*/}
        <Heading title='Recent News' subtitle={"Explore Our Blogs"} />
        {/*blog secion*/}
        <div
          className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
        gap-6 gap-y-8 sm:gap-4 md:gap-7'
        >
          {/*blog card*/}
          {BlogData.map((data) => (
            <div
              data-aos='fade-up'
              data-aos-delay={data.aosDelay}
              key={data.title}
              className=' bg-white dark:bg-gray-900'
            >
              {/* img section*/}
              <div className=' overflow-hidden rounded-2xl mb-2'>
                <img
                  src={data.Image}
                  alt=''
                  className=' object-cover rounded-2xl hover:scale-105'
                />
              </div>
              {/*content section*/}
              <div className=' space-y-2'>
                <p className=' text-xs text-gray-500'>{data.published}</p>
                <p className=' font-bold line-clamp-1 '>{data.title}</p>
                <p
                  className=' line-clamp-5 text-sm text-gray-600
                dark:text-gray-400'
                >
                  {data.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
