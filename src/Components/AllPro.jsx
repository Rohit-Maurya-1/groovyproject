import React from "react";
import newAllProducts2 from "../../public/newpng/newAllProducts2.png";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

const AllPro = () => {
  return (
    <div>
      <div className="bg-[#FFFBE2] flex flex-col md:flex-row items-center justify-center p-6 md:px-16 relative">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="capitalize text-3xl md:text-5xl lg:text-7xl text-zinc-800 z-20">
            Healthy living starts with fruit juices...
          </h1>
          <Link to="/products" className="flex justify-center md:justify-start mt-4">
            <button className="text-lg md:text-xl lg:text-2xl px-4 py-2 text-zinc-800 border-2 flex gap-2 hover:gap-4 items-center hover:bg-zinc-800 hover:text-white border-zinc-800 transition-all ease-in-out">
              Explore Products
              <MdArrowOutward className="transition-all ease-in-out" />
            </button>
          </Link>
        </div>
        <img
          src={newAllProducts2}
          alt="All Products"
          className="h-64 md:h-[80vh] mt-8 md:mt-0 object-contain md:w-1/2"
        />
      </div>
    </div>
  );
};

export default AllPro;
