import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Gallery from "../Pages/Gallery";
import Contact from "../Pages/Contact";
import Products from "../Pages/Products";
import About from "../Pages/About";
import Media from "../Pages/Media";
import OurStory from "../Pages/OurStory";
import Award from "../Pages/Award";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/award" element={<Award />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/media" element={<Media />} />
      </Routes>
    </>
  );
};

export default Routing;
