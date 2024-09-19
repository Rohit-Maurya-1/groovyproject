import React from 'react';
import MixFruits_web from '../../public/newpng/MixFruits_web.png';
import { LuShoppingBag } from "react-icons/lu";

const SliderSix = () => {
  return (
    <div className="h-screen pt-32 md:pt-32 w-full flex flex-col md:flex-row items-center justify-between p-6 md:pl-16 bg-[#F8931F]">
      <div className="text-center md:text-left">
        <div className="font-oswald font-semibold uppercase text-3xl md:text-5xl lg:text-7xl text-white mb-4 md:mb-0">
          <h1 className="text-orange-700">
            Made With Fresh <br className="hidden md:block" />
            & Ripe <br className="hidden md:block" />
            <span className="text-[#FFF531]">Mix Fruits</span>
          </h1>
        </div>
        <div className="font-oswald font-semibold uppercase text-xl md:text-3xl lg:text-4xl text-gray-700 mt-4 md:mt-0">
          Groovy Fruit Drink - Mix
        </div>
        <div className="flex justify-center md:justify-start uppercase mt-4 md:mt-8">
          <button className="bg-gray-700 text-white hover:bg-white hover:text-gray-700 transition-all ease-in-out px-4 text-lg md:text-xl py-3 w-auto flex items-center gap-2">
            Shop Now <LuShoppingBag />
          </button>
        </div>
      </div>
      <img src={MixFruits_web} alt="Mix Fruits" className="h-64 md:h-full mt-8 md:mt-8 object-contain" />
    </div>
  );
};

export default SliderSix;
