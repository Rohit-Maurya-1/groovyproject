import React from "react";

const OurStory = () => {
  return (
    <div className="w-full px-4 lg:px-16 pt-16 lg:pt-24">
      <h1 className="text-3xl lg:text-4xl font-semibold text-center w-full">
          Our Story
        </h1>
    <div className="flex flex-col lg:flex-row pt-8 pb-16">
      <div className="w-full lg:w-1/2 flex justify-center items-center px-4 lg:px-8 mb-8 lg:mb-0">
        <img
          src="https://images.yourstory.com/cs/21/98e25df018b511e988ceff9061f4e5e7/800x4001-1624454935456.png?mode=crop&crop=faces&ar=16%3A9&format=auto&w=1080&q=75"
          alt="Groovy Juice"
          className="w-full h-auto max-w-lg rounded-lg"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-4 px-4 lg:px-8 text-md">
        <p className="text-lg lg:text-xl text-justify">
          The journey of Groovy starts from a dream of{" "}
          <span className="bg-zinc-800 text-white px-2 ">2 brothers</span> to
          create an honest & impactful brand to reflect their uncompromising
          approach to creating the purest juices. The brand unleashes freshness
          from the very first drop, delivering an intense hit of purity that
          makes you go Groovy. Located in the Greater Delhi Area, Groovy is
          dedicated to providing high-quality, natural juices.
        </p>
      </div>
    </div>
    </div>
  );
};

export default OurStory;
