import React from "react";
import { FaShoppingBag } from "react-icons/fa";

const ProductCard = ({ image, backgroundColor, price, desc, add }) => {
  return (
    <div className="w-72 rounded-lg overflow-hidden shadow-md">
      <div
        className="h-64 flex items-center justify-center overflow-hidden relative group"
        style={{ backgroundColor: `#${backgroundColor}` }}
      >
        <img
          src={image}
          alt="Product"
          className="h-60 py-4 transition-transform duration-300 ease-in-out transform group-hover:scale-110"
        />
        <div className="bg-[#1f1f1f10] absolute w-full flex justify-end p-2 h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <FaShoppingBag onClick={add} className="bg-white text-black p-1 rounded-md hover:text-green-600" size={28} />
        </div>
      </div>
      <div className="flex justify-between">
        <p className="tracking-tight py-1 px-4">{desc}</p>
        <h1 className="font-semibold py-1 px-4">₹{price}/-</h1>
      </div>
    </div>
  );
};

export default ProductCard;
