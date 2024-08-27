import { VelocityScroll } from "./magicui/scroll-based-velocity";
import React from "react";

const LeftToRightMarquee = () => {
  return (
    <>
      <div className="  text-sm -mt-8 bg-[#14532D]"> 
      <VelocityScroll
        text="Jucies Served with Love | 100% natural fruit juice | No added colors | no preservatives | "
        
        default_velocity={1}
        className="fon-display text-center text-sm font-bold tracking-[-0.02em] text-white dark:text-white md:text-2xl "
      />
      </div>
    </>
  );
};

export default LeftToRightMarquee;
