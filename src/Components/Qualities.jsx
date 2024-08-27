// src/components/Qualities.jsx
import React from "react";
import img from "../../public/slide1.jpg";
import bird from "../../public/bird.png";
import birdtwo from "../../public/bird2.png";
import singlebird from "../../public/singbird.png";
import { FaTrophy, FaClock, FaRecycle } from "react-icons/fa";

const Qualities = () => {
  return (
    // <div className="p-8 font-sans" style={{ backgroundImage: `url(${img})` }}>
    <div className="p-8 font-sans bg-[#9FD069] px-16 ">
      <h1 className="text-4xl font-bold text-center relative mb-4 bg-red500">
        <p className="z-40 text-white ">
          COMPLETES YOUR DRINKS, <br /> ANY TIME! {"  "} ANY WHERE!
        </p>
        <img
          src={bird}
          alt=""
          className="w-80 absolute  bottom-0 right-0 z-10"
        />
      </h1>
      <p className="text-center text-gray-600 mb-8">
        See our 28 reviews on <a href="">Any Link</a>
      </p>

      <div className="flex justify-center mb-8 items-center">
        <img
          src="../../logo.png"
          alt="Drink Packs"
          className="max-w-full h-[12vh]"
        />
        <img src={singlebird} alt="" className="w-12 h-10" />
      </div>

      <p className="text-center relative text-xl mb-8 text-white ">
        Every sip of our juices takes you down memory lane. You don’t just enjoy
        the diversity of flavours but dive into a pool of quality fruit
        extracts. Groovy is not just a drink, it's a story spun together in the
        form of joyful and bright squeezy packs.
      </p>

      <p className="text-center text-xl mb-8 text-white ">
        Goovy juices are nothing less than moments of healthy sip. It’s 100%
        fruit and 0% anything else. You open the pack, and it comes out to
        enrich your body and taste buds with mind-blowing mix of flavours,
        essential vitamins, and minerals. With no added preservatives, no added
        colours or bio-chemicals, Groovy is exactly what you wish for!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center bg-white border-2 border-[#9FD069] rounded-xl shadow-xl hover:scale-105 transition-all ease-in-out px-4 py-8 ">
          <FaTrophy className="text-4xl text-yellow-500 mb-4" />
          <h2 className="text-xl font-bold mb-2 leading-none">
            {" "}
            NATURAL TASTE
          </h2>
          <p className="text-gray-600 text-sm ">
            Our fruit not only matches the flavour of fresh fruit but also
            serves as a fantastic flavour booster to the drink.
          </p>
        </div>

        <div className="flex flex-col items-center bg-white border-2 border-[#9FD069] rounded-xl shadow-xl hover:scale-105 transition-all ease-in-out px-4 py-8 ">
          <FaClock className="text-4xl text-blue-500 mb-4" />
          <h2 className="text-xl font-bold mb-2 leading-none">
            NO ADDED COLORS <br /> NO PRESERVATIVES
          </h2>
          <p className="text-gray-600 text-sm ">
            Using fresh fruit is always nice to store your fruits in a locked
            hub. No more fridge full of unloved fruit and veg.
          </p>
        </div>

        <div className="flex flex-col items-center bg-white border-2 border-[#9FD069] rounded-xl shadow-xl hover:scale-105 transition-all ease-in-out px-4 py-8 ">
          <FaRecycle className="text-4xl text-green-500 mb-4" />
          <h2 className="text-xl font-bold mb-2 leading-none">MINIMUM WASTE</h2>
          <p className="text-gray-600 text-sm ">
            Using fresh fruit is always nice to store your fruits in a locked
            hub. No more fridge full of unloved fruit and veg.
          </p>
        </div>
      </div>
      <div className="w-full  flex justify-center py-8">
        <img src="../../public/allpro.png" alt="" />
      </div>
    </div>
  );
};

export default Qualities;
