import React from 'react';
import lychee from '../../public/newpng/fruitLychyee.png';
import { LuShoppingBag } from "react-icons/lu";

const SliderFour = () => {
  return (
    <div className="h-screen pt-32 w-full flex flex-col md:flex-row items-center justify-between p-6 md:pl-16 bg-[#EF94A6]">
      <div className="text-center md:text-left">
        <div className="font-oswald font-bold uppercase text-3xl md:text-5xl lg:text-7xl text-white mb-4 md:mb-0">
          <h1 className="text-[#9D2729]">
            Made With Sweet <br className="hidden md:block" />
            & Pulpy <br className="hidden md:block" />
            <span className="text-[#ffffff]">Lychees</span>
          </h1>
        </div>
        <div className="font-oswald font-semibold uppercase text-xl md:text-3xl lg:text-4xl text-gray-700 mt-4 md:mt-0">
          Groovy Fruit Drink - Lychees
        </div>
        <div className="flex justify-center md:justify-start uppercase mt-4 md:mt-8">
          <button className="bg-gray-700 text-white hover:bg-white hover:text-gray-700 transition-all ease-in-out px-4 text-lg md:text-xl py-3 w-auto flex items-center gap-2">
            Shop Now <LuShoppingBag />
          </button>
        </div>
      </div>
      <img src={lychee} alt="Lychee" className="h-64 md:h-full mt-8 md:mt-8 object-contain" />
    </div>
  );
};

export default SliderFour;
