import React, { useState, useEffect } from "react";
import { FaRecycle } from "react-icons/fa";
import { GiFruitTree } from "react-icons/gi";
import { IoBan } from "react-icons/io5";
import groovy from "../../public/banner/groovy.png";
import groovyplus from "../../public/banner/groovyplus.png";

const Features = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [groovy, groovyplus];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 1 second

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [images.length]);

  return (
    <div className="mx-auto max-w-7x px-16 py-4 sm:px-6 lg:px-8 bg-[#3AB54A]">
      <div className="mx-auto text-center w-full">
        <h2 className="mt-6 text-2xl items-center justify-center font-bold leading-tight w-full text-white sm:text-4xl lg:text-4xl flex flex-col">
          <p className="font-semibold">
            COMPLETES YOUR DRINKS, ANY TIME! ANY WHERE!{" "}
          </p>
          <div className="w-full pt-4 pb-1 transition-all ease-in-out">
            <img
              src={images[currentImageIndex]}
              alt={`Marquee image ${currentImageIndex}`}
              className="h-80 mx-auto transition-all ease-in-out"
            />
          </div>
        </h2>
        <p className="px-64 text-center text-base leading-relaxed text-gray-100">
          Every sip of our juices takes you down memory lane. <br /> You don’t
          just enjoy the diversity of flavours but dive into a pool of quality
          fruit extracts. <br /> Groovy is not just a drink, it's a story spun
          together in the form of joyful and bright squeezy packs.
        </p>
      </div>
      <div className="my-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 px-8">
        <div className="border-zinc-200 shadow-2xl bg-[#197726] border-2 py-4 px-4 rounded-xl">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <GiFruitTree className="h-9 w-9 text-green-500 " />
          </div>
          <h3 className="mt-2 text-lg font-semibold text-white">
            NATURAL TASTE
          </h3>
          <p className="mt-2 text-sm text-gray-200">
            Our fruit not only matches the flavour of fresh fruit but also
            serves as a fantastic flavour booster to the drink.
          </p>
        </div>
        <div className="border-zinc-200 shadow-2xl bg-[#197726] border-2 py-4 px-4 rounded-xl">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <IoBan className="h-9 w-9 text-red-500" />
          </div>
          <h3 className="mt-2 text-lg font-semibold text-white">
            NO ADDED COLORS/PRESERVATIVES
          </h3>
          <p className="mt-2 text-sm text-gray-200">
            Using fresh fruit is always nice to store your fruits in a locked
            hub. No more fridge full of unloved fruit and veg.
          </p>
        </div>
        <div className="border-zinc-200 shadow-2xl bg-[#197726] border-2 py-4 px-4 rounded-xl">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <FaRecycle className="h-9 w-9 text-green-500" />
          </div>
          <h3 className="mt-2 text-lg font-semibold text-white">
            MINIMUM WASTE
          </h3>
          <p className="mt-2 text-sm text-gray-200">
            Using fresh fruit is always nice to store your fruits in a locked
            hub. No more fridge full of unloved fruit and veg.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
