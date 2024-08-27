import React from "react";

import ilogo from "../../public/igpost/ilogo.jpg";
const IgPost = ({igPic}) => {
  return (
    <>
      <div className=" relative w-60">
        <div className="flex absolute left-2 top-2 items-center gap-2">
          <img src={ilogo} alt="" className="rounded-full h-8" />
          <a href="https://www.instagram.com/drink_groovy/"><p className="font-semibold">Drink Groovy</p></a>
        </div>
        <div className="flex ">
            <img src={igPic} alt="" className="rounded-xl" />
        </div>
      </div>
    </>
  );
};

export default IgPost;
