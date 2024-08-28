import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProductCard from "../Components/ProductCard";
import anarcard from "../../public/anarcard.png";
import lemoncard from "../../public/lemoncard.png";
import lycheecard from "../../public/lycheecard.png";
import mixcard from "../../public/mixcard.png";
import guavacard from "../../public/guavacard.png";
import mangocard from "../../public/mangocard.png";
import p1 from "../../public/p1.png";
import p2 from "../../public/p2.png";
import p3 from "../../public/p3.png";
import p4 from "../../public/p4.png";
import p6 from "../../public/p6.png";
import p7 from "../../public/p7.png";
import w1 from "../../public/w1.png";
import w2 from "../../public/w2.png";
import w3 from "../../public/w3.png";

const products = [
  
  

  {
    image: lemoncard,
    backgroundColor: "E5E759",
    price: "10.00",
    desc: "Lemon Mix Juice",
  },
  {
    image: lycheecard,
    backgroundColor: "F8C0D6",
    price: "10.00",
    desc: "Lychee Juice",
  },
  {
    image: mixcard,
    backgroundColor: "F79647",
    price: "10.00",
    desc: "Mix Fruite Juice",
  },
  {
    image: guavacard,
    backgroundColor: "A0CF6E",
    price: "10.00",
    desc: "Guava Juice",
  },
  {
    image: mangocard,
    backgroundColor: "FED53F",
    price: "10.00",
    desc: "Mango Juice",
  },
  {
    image: anarcard,
    backgroundColor: "ED6070",
    price: "10.00",
    desc: "Anar Juice",
  },
  {
    image: p6,
    backgroundColor: "0E4E29",
    price: "10.00",
    desc: "Jeera",
  },
];

const plusProducts = [
  {
    image: p1,
    backgroundColor: "FED53F",
    price: "20.00",
    desc: "Mango Juice",
  },
  {
    image: p4,
    backgroundColor: "F79745",
    price: "20.00",
    desc: "Orange Juice",
  },
  {
    image: p2,
    backgroundColor: "F8C0D6",
    price: "20.00",
    desc: "Lychee Juice",
  },
  {
    image: p7,
    backgroundColor: "ED6070",
    price: "20.00",
    desc: "Anar Juice",
  },
  
  {
    image: p3,
    backgroundColor: "A0CF6E",
    price: "20.00",
    desc: "Guava Juice",
  },
];

const water = [
  {
    image: w1,
    backgroundColor: "edf7ed",
    price: "6.00",
    desc: "Groovy 200 ML",
  },
  {
    image: w2,
    backgroundColor: "edf7ed",
    price: "10.00",
    desc: "Groovy 500 ML",
  },
  {
    image: w3,
    backgroundColor: "edf7ed",
    price: "20.00",
    desc: "Groovy 1000 ML",
  }
];

const Products = () => {
  return (
    <div className="relative w-full overflow-hidden pt-24">
      <h1 className="text-center font-semibold text-4xl ">
        Our Fruitful
        <span  className="font-semibold text-red-500">+</span> Products
      </h1>
      <div className="relative flex flex-wrap px-16">
        {plusProducts.map((product, index) => (
          <div key={index} className="p-2">
            <ProductCard
              image={product.image}
              backgroundColor={product.backgroundColor}
              price={product.price}
              desc={product.desc}
            />
          </div>
        ))}
      </div>
      <h1 className="text-center font-semibold text-4xl mt-8">
        Our Fruitful Products
      </h1>
      <div className="relative flex flex-wrap px-16">
        {products.map((product, index) => (
          <div key={index} className="p-2">
            <ProductCard
              image={product.image}
              backgroundColor={product.backgroundColor}
              price={product.price}
              desc={product.desc}
            />
          </div>
        ))}
      </div>

      <h1 className="text-center font-semibold text-4xl mt-8">
        Water
      </h1>
      <div className="relative flex flex-wrap px-16">
        {water.map((water, index) => (
          <div key={index} className="p-2">
            <ProductCard
              image={water.image}
              backgroundColor={water.backgroundColor}
              price={water.price}
              desc={water.desc}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
