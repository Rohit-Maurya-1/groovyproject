import React from 'react';
import jeera from '../../public/banner/jeera.jpg';
import { LuShoppingBag } from "react-icons/lu";

const SliderSeven = () => {
  return (
    <div className="h-screen w-full flex items-center justify-between pl-16 bg-[#006837] ">
        <div>
          <div className="font-oswald font-<weight>  font-semibold uppercase text-7xl text-white  ">
            <h1 className="text-">
              Made With Fresh
              <br /> & Ripe <br /> <span className="text-yellow-500">
                jeeras
              </span>{" "}
            </h1>
          </div>
          <div className="font-oswald font-<weight>  font-semibold uppercase text-4xl text-gray-100  ">
            Groovy Fruit Drink - jeera
          </div>
          <div className="w flex items-center uppercase mt-8">
            <h1 className="bg-gray-700 text-white hover:bg-white hover:text-gray-700 transition-all ease-in-out px-4 text-xl py-3 w-auto flex items-center gap-2">
              Shop Now <LuShoppingBag />

            </h1>
          </div>
        </div>
        <img src={jeera} alt="" className="h-full" />
      </div>
  );
};

export default SliderSeven;
