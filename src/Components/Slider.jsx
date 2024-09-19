import React from "react";
import fruitLemon from "../../public/newpng/fruitLemon.png";
import { LuShoppingBag } from "react-icons/lu";

const Slider = () => {
  return (
    <div className="h-screen pt-32 w-full flex flex-col md:flex-row items-center justify-between p-6 md:px-16 bg-[#F5DE30]">
      <div className="text-center md:text-left">
        <div className="font-oswald font-bold uppercase text-3xl md:text-5xl lg:text-7xl text-white mb-4 md:mb-0">
          <h1>
            Made With Mint <br className="hidden md:block" />
            And <br className="hidden md:block" />
            <span className="text-[#33810A]">Lemon</span>
          </h1>
        </div>
        <div className="font-oswald font-semibold uppercase text-xl md:text-3xl lg:text-4xl text-gray-700 mb-4">
          Groovy Fruit Drink - Lemon
        </div>
        <div className="flex justify-center md:justify-start uppercase mt-4 md:mt-8">
          <button className="bg-gray-700 text-white hover:bg-white hover:text-gray-700 transition-all ease-in-out px-4 text-lg md:text-xl py-3 flex items-center gap-2">
            Shop Now <LuShoppingBag />
          </button>
        </div>
      </div>
      <img src={fruitLemon} alt="Lemon Fruit" className="h-64 md:h-full mt-8 md:mt-16 object-contain" />
    </div>
  );
};

export default Slider;
