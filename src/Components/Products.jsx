import React from "react";
import Card from "./Card";

const Products = () => {
  return (
    <>
      <div className="products w-full px-4 sm:px-8 md:px-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-center py-4 sm:py-6 md:py-8">
          <span className="text-zinc-800 font-semibold">
            Our Delightful Products
          </span>
        </h1>
        <Card />
      </div>
    </>
  );
};

export default Products;
