import React from "react";
import Heading from "../shared/Heading";
import ProductCard from "./ProductCard";

//image import

import Img1 from "../../assets/product/p-1.jpg";
import Img2 from "../../assets/product/p-2.jpg";
import Img3 from "../../assets/product/p-3.jpg";
import Img4 from "../../assets/product/p-4.jpg";
import Img5 from "../../assets/product/p-5.jpg";
import Img6 from "../../assets/product/p-6.jpg";
import Img7 from "../../assets/product/p-7.jpg";
import Img8 from "../../assets/product/p-8.jpg";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Boat Headphone",
    price: "120",
    priceB: "10,000",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Rocky Mountain",
    price: "420",
    priceB: "20,000",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    price: "320",
    priceB: "17,000",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed",
    price: "220",
    priceB: "15,000",
    aosDelay: "600",
  },
];

const ProductsData2 = [
  {
    id: 5,
    img: Img5,
    title: "Boat Headphone",
    price: "120",
    priceB: "10,000",
    aosDelay: "0",
  },
  {
    id: 6,
    img: Img6,
    title: "Rocky Mountain",
    price: "420",
    priceB: "18,000",
    aosDelay: "200",
  },
  {
    id: 7,
    img: Img7,
    title: "Goggles",
    price: "320",
    priceB: "17,000",
    aosDelay: "400",
  },

  {
    id: 8,
    img: Img8,
    title: "Printed",
    price: "220",
    priceB: "15,000",
    aosDelay: "600",
  },
];

const Products = ({ handelOrderPopUp }) => {
  return (
    <div>
      <div>
        {/*header secion*/}
        <Heading title='Our Products' subtitle={"Explore Our Products"} />
        {/*body secion*/}
        <ProductCard data={ProductsData} handelOrderPopUp={handelOrderPopUp} />
        <ProductCard data={ProductsData2} handelOrderPopUp={handelOrderPopUp} />
      </div>
    </div>
  );
};

export default Products;
