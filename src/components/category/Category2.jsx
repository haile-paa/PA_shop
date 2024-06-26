import Image1 from "../../assets/category/gaming.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/speaker.png";
import Button from "../shared/Button";
const Category2 = ({ handelOrderPopUp }) => {
  return (
    <div className='py-8'>
      <div className='container'>
        <div
          className='grid grid-cols-1 sm:grid-cols-2
        lg:grid-cols-4 gap-8'
        >
          {/* first col */}
          <div
            className='col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 
          to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end hover:scale-105 overflow-hidden'
          >
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-white'>Enjoy</p>
                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                <p className='text-4xl xl:text-5xl text-gray-500 font-bold opacity-40 mb-2'>
                  playstation
                </p>
                <Button
                  handler={handelOrderPopUp}
                  text='Browse'
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img
              src={Image1}
              alt=''
              className='w-[320px]  absolute -right-0 lg:top-[20px]'
            />
          </div>
          {/*second col*/}
          <div
            className='py-10 pl-5 bg-gradient-to-br from-brandBlue
          to-brandBlue/90 text-white rounded-3xl relative h-[320px] flex items-end hover:scale-105 overflow-hidden'
          >
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-white'>Enjoy</p>
                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>
                  VR headset
                </p>
                <Button
                  handler={handelOrderPopUp}
                  text='Browse'
                  bgColor={"bg-white"}
                  textColor={"text-brandBlue"}
                />
              </div>
            </div>
            <img
              src={Image2}
              alt=''
              className='w-[320px]  absolute -right-10 lg:top-[30px]'
            />
          </div>
          {/* third col*/}
          <div
            className='py-10 pl-5 bg-gradient-to-br from-black/90
          to-black/70 text-white rounded-3xl relative h-[320px] flex items-start hover:scale-105 overflow-hidden'
          >
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-white'>Enjoy</p>
                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>
                  Speaker
                </p>
                <Button
                  handler={handelOrderPopUp}
                  text='Browse'
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img
              src={Image3}
              alt=''
              className='w-[200px] absolute -right-0 bottom-0'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category2;
