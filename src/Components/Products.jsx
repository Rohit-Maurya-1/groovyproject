import React from "react";
import Card from "./Card";
const Products = () => {
  return (
    <>
      <div className="products ">
        <h1 className="text-4xl font-semibold font tracking-tight text-center py-8" >
           <span className="text-zinc-800 font-semibold">Our Deltightful Products</span> 
        </h1>
        <Card />
      </div>
    </>
  );
};

export default Products;
