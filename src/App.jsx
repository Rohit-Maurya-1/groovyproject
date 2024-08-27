import React from "react";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer.jsx";
import Routing from "./Utils/Routing.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { gsap } from "gsap";
import anim from "../public/anim.gif";
import "./App.css"; // Import the CSS file
import FullScreenImage from "./Components/FullScreenImage";

function App() {
  return (
    <>
      <div
        className="full-screen-image z-[1000]"
        style={{ backgroundImage: `url(${anim})` }}
      ></div>
      <Nav />
      <Routing />
      <Footer />
    </>
  );
}

export default App;
