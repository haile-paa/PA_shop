import React from "react";
import smartwatch2 from "../../assets/category/wach.png";

const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "14 jan to 28 jan",
  Image: smartwatch2,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4: "Lorm ipsum , dolar sit amet constectaches adduyvdhgf",
  bgColor: "#2dcc6f",
};

const Banner2 = () => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12'>
      <div className='container'>
        <div
          style={{ backgroundColor: BannerData2.bgColor }}
          className='grid grid-cols-1 md:grid-cols-3 gap-6
        items-center text-white rounded-3xl'
        >
          {/* first col*/}
          <div className='p-6 sm:p-8'>
            <p data-aos='slide-right' className='text-sm'>
              {BannerData2.discount}
            </p>
            <h1
              data-aos='zoom-out'
              className='uppercase text-4xl lg:text-7xl font-bold'
            >
              {BannerData2.title}
            </h1>
            <p data-aos='fade-up' className='text-sm'>
              {BannerData2.date}
            </p>
          </div>
          {/*second col*/}
          <div data-aos='zoom-in' className='h-full flex items-center '>
            <img
              src={BannerData2.Image}
              alt=''
              className='scale-125 w-[250px] md:w-[340px] mx-auto
              drop-shadow-2xl object-cover '
            />
          </div>
          {/*third col*/}
          <div className='flex flex-col justify-center gap-4 p-6 sm:p-8'>
            <p data-aos='zoom-out' className='font-bold text-xl'>
              {BannerData2.title2}
            </p>
            <p data-aos='fade-up' className='text-3xl sm:text-5xl font-bold'>
              {BannerData2.title3}
            </p>
            <p data-aos='fade-up' className='text-sm tracking-wide leading-5'>
              {BannerData2.title4}
            </p>
            <div data-aos='fade-up' data-aos-offset='0'>
              <button
                style={{ color: BannerData2.bgColor }}
                className='bg-white py-2 px-4 rounded-full'
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
