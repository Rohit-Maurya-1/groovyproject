import React from "react";
import dets3 from "../../public/newpng/dets3.png";
import leaf from "../../public/newpng/leaf.png";
import leaf2 from "../../public/newpng/leaf2.png";
import leaf3 from "../../public/newpng/leaf3.png";

const CheckDets = () => {
  return (
    <div className="w-full relative flex flex-col md:flex-row justify-center items-center bg-[#CF4758] pb-6">
      <div className="w-full md:w-1/3 p-4 md:pl-16 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl lg:text-6xl uppercase text-white tracking-tighter leading-tight md:leading-[5rem]">
          Fresh from source
        </h1>
      </div>
      <div
        className="w-full md:w-1/3 z-20 h-64 md:h-[80vh] bg-no-repeat bg-center bg-cover mt-6 md:mt-0"
        style={{ backgroundImage: `url(${dets3})` }}
      ></div>
      <div className="w-full md:w-1/3 p-4 md:pr-16 text-center md:text-right mt-6 md:mt-0">
        <h1 className="text-3xl md:text-5xl lg:text-6xl uppercase text-white tracking-tighter leading-tight md:leading-[5rem]">
          100% Gluten Free
        </h1>
      </div>
      <img
        src={leaf}
        alt=""
        className="move-img w-10 md:w-16 absolute top-4 md:top-10 right-12 md:right-24"
      />
      <img
        src={leaf2}
        alt=""
        className="move-img1 w-10 md:w-16 absolute top-40 md:top-60 right-24 md:right-96"
      />
      <img
        src={leaf3}
        alt=""
        className="move-img w-10 md:w-16 absolute top-8 md:top-16 left-12 md:left-24"
      />
      <img
        src={leaf}
        alt=""
        className="move-img1 w-10 md:w-16 absolute bottom-24 md:bottom-36 left-12 md:left-24 rotate-90"
      />
    </div>
  );
};

export default CheckDets;
