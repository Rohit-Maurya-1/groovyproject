import React, { useEffect, useState } from "react";
import a from "../../public/a.jpeg";
import b from "../../public/b.jpeg";
import c from "../../public/c.jpeg";
import e from "../../public/e.jpeg";
import f from "../../public/f.jpeg";
import g from "../../public/g.jpeg";
import h from "../../public/h.jpeg";
import pack from "../../public/pack.jpg";
import pow from "../../public/pow.png";
import wearegroovy from "../../public/wearegroovy.jpg";
import www from "../../public/www.png";
import www1 from "../../public/www1.png";
import TimelineComponent from "../Components/TimelineComponent";

const images = [pack, www, www1];
const dist = [a, b, c, e, f, g, h];

const Award = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      <div className="pt-20 bg-[#f49090]">
        <TimelineComponent />

        <div className="w-full flex flex-col lg:flex-row px-4 lg:px-16 bg-[#abf063] py-4">
          {/* Image Carousel */}
          <div className="w-full lg:w-1/2 bg-green-40 overflow-hidden relative">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <img
                    src={image}
                    alt={`Slide ${index}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
            >
              &#10094;
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
            >
              &#10095;
            </button>
          </div>

          {/* Text and Images */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start lg:text-left mt-4 lg:mt-0">
            <img src={wearegroovy} alt="We Are Groovy" className="w-full max-w-sm mb-4" />
            <img src={pow} alt="Pow" className="w-full max-w-sm mb-4" />
            <a
              href="https://packagingoftheworld.com/2020/07/groovy.html"
              className="bg-zinc-800 text-white px-4 py-2 rounded text-center"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Award;
