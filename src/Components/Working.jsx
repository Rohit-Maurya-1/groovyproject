import NumberTicker from "./magicui/number-ticker";
import React from "react";
import { PiCity } from "react-icons/pi";
import { RiEmotionHappyLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa6";

const Working = () => {
  return (
    <div className="w-full text-white bg-green-900 px-4 py-2">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex items-center justify-center gap-2 w-full md:w-1/4">
          <div className="flex items-center gap-2">
            <PiCity className="h-12 md:h-16" />
            <h1 className="text-xl md:text-2xl">States</h1>
          </div>
          <NumberTicker value={14} className="text-xl md:text-2xl" />
        </div>
        <div className="flex items-center justify-center gap-2 w-full md:w-1/4">
          <div className="flex items-center gap-2">
            <RiEmotionHappyLine className="text-xl md:text-2xl" />
            <h1 className="text-xl md:text-2xl">Cities</h1>
          </div>
          <NumberTicker value={310} className="text-xl md:text-2xl" />
        </div>
        <div className="flex items-center justify-center gap-2 w-full md:w-1/4">
          <div className="flex items-center gap-2">
            <FaUsers className="text-xl md:text-2xl" />
            <h1 className="text-xl md:text-2xl">Partners</h1>
          </div>
          <NumberTicker value={260} color="white" className="text-xl md:text-2xl" />
        </div>
        <div className="flex items-center justify-center gap-2 w-full md:w-1/4">
          <div className="flex items-center gap-2">
            <FaUsers className="text-xl md:text-2xl" />
            <h1 className="text-xl md:text-2xl">Customers</h1>
          </div>
          <NumberTicker value={125670} color="white" className="text-xl md:text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Working;
