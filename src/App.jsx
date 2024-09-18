import React from "react";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer.jsx";
import Routing from "./Utils/Routing.jsx";
import { gsap } from "gsap";
import anim from "../public/anim.gif";
import "./App.css"; // Import the CSS file
import { CartProvider } from "./context/CartProvider.jsx";

function App() {
  return (
    <CartProvider initialCartItems={[]}>
    <>
      <div
        className="full-screen-image z-[1000]"
        style={{ backgroundImage: `url(${anim})` }}
      ></div>
      <Nav />
      <Routing />
      <Footer />
    </>
    </CartProvider>
  );
}

export default App;
