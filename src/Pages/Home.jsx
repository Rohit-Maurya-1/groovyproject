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
import CheckDets from '../Components/CheckDets.jsx'
import AllPro from '../Components/AllPro.jsx'
const Home = () => {
  return (
    <>
      <div className="overflow-hidden">
        {/* <PageTwo /> */}
        <PageTwo1 />
        {/* <Carousel /> */}
        <NewMarquee />
        <AllPro />
        {/* <Products /> */}

        <StickyBackground />

       <CheckDets />

        {/* <Features /> */}
        {/* <Qualities /> */}
        {/* <LeftToRightMarquee /> */}
        <Working />



        <Marquee />
      </div>
    </>
  );
};

export default Home;
