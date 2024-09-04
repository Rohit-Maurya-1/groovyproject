import React from 'react';
import guava from '../../public/newpng/fruitGuava.png';
import { LuShoppingBag } from "react-icons/lu";

const SliderThree = () => {
  return (
    <div className="h-screen pt-28 w-full flex flex-col md:flex-row items-center justify-between p-6 md:pl-16 bg-[#91DB68]">
      <div className="text-center md:text-left">
        <div className="font-oswald font-bold uppercase text-4xl md:text-7xl text-white mb-4 md:mb-0">
          <h1>
            Made With Fresh <br className="hidden md:block" />
            & Ripe <br className="hidden md:block" />
            <span className="text-[#F28878]">Guavas</span>
          </h1>
        </div>
        <div className="font-oswald font-semibold uppercase text-2xl md:text-4xl text-gray-600 mb-4">
          Groovy Fruit Drink - Guava
        </div>
        <div className="flex justify-center md:justify-start uppercase mt-4 md:mt-8">
          <button className="bg-gray-700 text-white hover:bg-white hover:text-gray-700 transition-all ease-in-out px-4 text-lg md:text-xl py-3 flex items-center gap-2">
            Shop Now <LuShoppingBag />
          </button>
        </div>
      </div>
      <img src={guava} alt="Guava" className="h-64 md:h-full md:mt-16 pb-4 md:pb-12 object-contain" />
    </div>
  );
};

export default SliderThree;
