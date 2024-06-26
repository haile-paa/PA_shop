import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/category/Category";
import Category2 from "./components/category/Category2";
import Services from "./components/services/Services";
import Banner from "./components/Banner/Banner";
import Products from "./components/products/Products";
import Banner2 from "./components/Banner/Banner2";
import Blogs from "./components/Blogs/Blogs";
import Partners from "./components/partners/Partners";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import PopUp from "./components/popup/PopUp";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);
  const [orderPopUp, setOrderPopUp] = React.useState(false);
  const handelOrderPopUp = () => {
    setOrderPopUp(!orderPopUp);
  };
  return (
    <div
      className='bg-white dark:bg-gray-900 dark:text-white
    duration-200 overflow-hidden'
    >
      <Navbar handelOrderPopUp={handelOrderPopUp} />
      <Hero handelOrderPopUp={handelOrderPopUp} />
      <Category handelOrderPopUp={handelOrderPopUp} />
      <Category2 handelOrderPopUp={handelOrderPopUp} />
      <Services />
      <Banner />
      <Products handelOrderPopUp={handelOrderPopUp} />
      <Banner2 />
      <Blogs />
      <Partners />
      <Footer />
      <PopUp orderPopUp={orderPopUp} handelOrderPopUp={handelOrderPopUp} />
    </div>
  );
};

export default App;
