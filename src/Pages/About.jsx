import React, { useState, useEffect } from "react";
import ourstory from "../../public/ourstory.png";
import pow from "../../public/pow.png";
import www from "../../public/www.png";
import www1 from "../../public/www1.png";
import wearegroovy from "../../public/wearegroovy.jpg";
import pack from "../../public/pack.jpg";
import WeAreFeatured from "../../public/WeAreFeatured.png";
import a from "../../public/a.jpeg";
import b from "../../public/b.jpeg";
import c from "../../public/c.jpeg";
import d from "../../public/d.jpeg";
import e from "../../public/e.jpeg";
import f from "../../public/f.jpeg";
import g from "../../public/g.jpeg";
import h from "../../public/h.jpeg";
import TimelineComponent from "../Components/TimelineComponent";
const images = [pack, www, www1];
const dist = [a, b, c, e, f, g, , h];
const About = () => {
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
      <div className="pt-20 bg-[#F3F1F8]">
        {/* <div className="flex w-full px-16 mt-4">
          <div className="w-1/2 justify-center items-center flex px-4 ">
            <img src="https://images.yourstory.com/cs/21/98e25df018b511e988ceff9061f4e5e7/800x4001-1624454935456.png?mode=crop&crop=faces&ar=16%3A9&format=auto&w=1080&q=75" alt="" />
          </div>
          <div className="w-1/2 justify-cent items-cente flex flex-col gap-3 px-4  text-md">
            <h1 className="text-4xl font-semibold text-center w-full">
              Our Story{" "}
            </h1>

            <h1 className="text-xl">
              The journey of Groovy starts from a dream of{" "}
              <span className="bg-zinc-800 text-white px-2 ">2 brothers</span>{" "}
              to create an honest & impactful brand to reflect their
              uncompromising approach to creating the purest juices.The brand
              unleashes freshness from the very first drop, delivering an
              intense hit of purity that makes you go Groovy. Located in the
              Greater Delhi Area, Groovy is dedicated to providing
              high-quality, natural juices.
            </h1>
          </div>
        </div> */}
        <TimelineComponent />

        <div className="w-full flex px-16 bg-[#abf063] py-4">
          <div className="w-1/2 bg-green-40 overflow-hidden">
            <div
              className="flex transition-transform duration-500 "
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <img
                    src={image}
                    alt={`Slide ${index}`}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="w-1/2 flex items-center  flex-col ">
            <img src={wearegroovy} alt="" className="w-96 " />
            <img src={pow} alt="" />
            <a href="https://packagingoftheworld.com/2020/07/groovy.html">
              <h1 className="bg-zinc-800 p text-white px-4 py-2 rounded">
                Read More
              </h1>
            </a>
          </div>
        </div>
        {/* <div className="">
          <img src="../../public/bgg2.png" alt="" />
        </div> */}

        <div></div>
      </div>
    </>
  );
};

export default About;
