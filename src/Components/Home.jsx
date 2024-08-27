import React from "react";

import Carousel from "../Components/Carousel";
import PageTwo from "../Components/PageTwo";
import PageTwo1 from "../Components/PageTwo1";
import Marquee from "../Components/Marquee";
import Working from "../Components/Working";
import Qualities from "../Components/Qualities";
import Features from "../Components/Features.jsx";
import StickyBackground from "../Components/StickyBackground";
import LeftToRightMarquee from "../Components/LeftToRightMarquee";
import Products from "../Components/Products";
import NewMarquee from '../Components/NewMarquee'
const Home = () => {
  return (
    <>
      <div className="overflow-hidden">
        <PageTwo />
        {/* <Carousel /> */}
        <NewMarquee />
        <StickyBackground />

        <Features />
        {/* <Qualities /> */}
        {/* <Products /> */}
        {/* <LeftToRightMarquee /> */}
        <Working />



        <Marquee />
      </div>
    </>
  );
};

export default Home;
