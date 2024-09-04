import React from "react";
import anar from "../../public/newpng/newAnarBanner.png";
import { LuShoppingBag } from "react-icons/lu";

const SliderTwo = () => {
  return (
    <div className="h-screen pt-32 w-full flex flex-col md:flex-row items-center justify-between p-6 md:pl-16 bg-[#FBB9BB]">
      <div className="text-center md:text-left">
        <div className="font-oswald font-bold uppercase text-4xl md:text-7xl text-white mb-4 md:mb-0">
          <h1>
            Made With Ruby <br className="hidden md:block" />
            Like <br className="hidden md:block" />
            <span className="text-[#AC2023]">Pomegranates</span>
          </h1>
        </div>
        <div className="font-oswald font-semibold uppercase text-2xl md:text-4xl text-gray-100 mb-4">
          Groovy Fruit Drink - Anar
        </div>
        <div className="flex justify-center md:justify-start uppercase mt-4 md:mt-8">
          <button className="bg-gray-700 text-white hover:bg-white hover:text-gray-700 transition-all ease-in-out px-4 text-lg md:text-xl py-3 flex items-center gap-2">
            Shop Now <LuShoppingBag />
          </button>
        </div>
      </div>
      <img src={anar} alt="Anar Banner" className="h-64 md:h-full mt-8 md:mt-8 object-contain" />
    </div>
  );
};

export default SliderTwo;
