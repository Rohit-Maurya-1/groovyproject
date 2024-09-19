import React, { useEffect, useRef } from 'react';
import mango from '../../public/newpng/fruitMango.png';
import { LuShoppingBag } from "react-icons/lu";
import gsap from 'gsap';

const SliderFive = () => {
  const textRef = useRef();
  const subTextRef = useRef();
  const buttonRef = useRef();
  const imageRef = useRef();

  // useEffect(() => {
  //   gsap.from([textRef.current, subTextRef.current, buttonRef.current, imageRef.current], {
  //     opacity: 0,
  //     y: 50,
  //     duration: 1.5,
  //     ease: "power3.out",
  //     stagger: 0.2,
  //   });
  // }, []);

  return (
    <div className="h-screen pt-32 w-full flex flex-col md:flex-row items-center justify-between p-6 md:pl-16 bg-[#FFDA55]">
      <div className="text-center md:text-left">
        <div ref={textRef} className="font-oswald font-semibold uppercase text-3xl md:text-5xl lg:text-7xl text-white">
          <h1 className='text-[#c0732b]'>
            Made With Tropical <br className="hidden md:block" /> 
            <span className="text-[#ffffff]">Mango</span>
          </h1>
        </div>
        <div ref={subTextRef} className="font-oswald font-semibold uppercase text-xl md:text-3xl lg:text-4xl text-gray-700 mt-4 md:mt-0">
          Groovy Fruit Drink - Mango
        </div>
        <div ref={buttonRef} className="flex justify-center md:justify-start uppercase mt-4 md:mt-8">
          <button className="bg-gray-700 text-white px-4 text-lg md:text-xl py-3 w-auto flex items-center gap-2">
            Shop Now <LuShoppingBag />
          </button>
        </div>
      </div>
      <img ref={imageRef} src={mango} alt="Mango" className="h-64 md:h-full mt-8 md:mt-8 object-contain" />
    </div>
  );
};

export default SliderFive;
