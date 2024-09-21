import React, { useState } from "react";
import a from "../../public/a.jpeg";
import b from "../../public/b.jpeg";
import c from "../../public/c.jpeg";
import d from "../../public/d.jpeg";
import e from "../../public/e.jpeg";
import f from "../../public/f.jpeg";
import g from "../../public/g.jpeg";
import h from "../../public/h.jpeg";
import dl1 from "../../public/dl1.jpg";
import dl2 from "../../public/dl2.jpg";
import dl3 from "../../public/dl3.jpg";
import dl4 from "../../public/dl4.jpg";
import dl5 from "../../public/dl5.jpg";
import dl6 from "../../public/dl6.jpg";
import dl7 from "../../public/dl7.jpg";
import dl8 from "../../public/dl8.jpg";
import dl9 from "../../public/dl9.jpg";
import dl10 from "../../public/dl10.jpg";
import dl12 from "../../public/dl12.jpg";
import dl13 from "../../public/dl13.jpg";
import dl14 from "../../public/dl14.jpg";
import pb1 from "../../public/pb1.jpg";
import pb2 from "../../public/pb2.jpg";
import pb3 from "../../public/pb3.jpg";
import pb5 from "../../public/pb5.jpg";
import pb6 from "../../public/pb6.jpg";
import pb7 from "../../public/pb7.jpg";
import pb8 from "../../public/pb8.jpg";
import pb9 from "../../public/pb9.jpg";
import pb10 from "../../public/pb10.jpg";
import pb11 from "../../public/pb11.jpg";
import pb13 from "../../public/pb13.jpg";
import IMG6 from "../../public/IMG6.jpg";
import pb14 from "../../public/pb14.jpg";
import ngp1 from "../../public/ngp1.jpg";
import ngp2 from "../../public/ngp2.jpg";
import ngp3 from "../../public/ngp3.jpg";
import ngp4 from "../../public/ngp4.jpg";
import ngp5 from "../../public/ngp5.jpg";
import ngp6 from "../../public/ngp6.jpg";
import ngp7 from "../../public/ngp7.jpg";

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null); // Index instead of image

  const dist = [
    a, b, c, d, e, f, g, h, dl1, dl2, dl3, dl4, dl5, dl6, dl7, dl8, dl9, dl10, dl12, dl13, dl14,
    pb1, pb2, pb3, pb5, pb6, pb7, pb8, pb9, pb10, pb11, pb13, IMG6, pb14, ngp1, ngp2, ngp3, ngp4, ngp5, ngp6, ngp7,
  ];

  const handleImageClick = (index) => {
    setSelectedIndex(index); // Set index on click
  };

  const closeImage = () => {
    setSelectedIndex(null);
  };

  const showNextImage = () => {
    if (selectedIndex < dist.length - 1) {
      setSelectedIndex((prev) => prev + 1);
    }
  };

  const showPrevImage = () => {
    if (selectedIndex > 0) {
      setSelectedIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="pt-16 pb-11">
      <div className="flex px-4 sm:px-10 md:px-16 flex-col items-center">
        <h2 className="mt-8 text-3xl sm:text-4xl md:text-5xl leading-tight w-full text-black flex flex-col mb-4">
          <p className="font-semibold text-center">Our Distributors</p>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {dist.map((val, key) => {
            return (
              <div key={key} className="rounded-xl">
                <img
                  src={val}
                  alt={`Distributor ${key}`}
                  className="w-full h-40 sm:h-48 object-cover cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
                  onClick={() => handleImageClick(key)} // Pass index instead of image
                />
              </div>
            );
          })}
        </div>
      </div>

      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white text-5xl font-bold z-50 w-14 h-14"
              onClick={closeImage}
            >
              &times;
            </button>

            {/* Left Arrow */}
            {selectedIndex > 0 && (
              <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-dark-red text-7xl font-bold z-50 w-18 h-18"
                onClick={showPrevImage}
                style={{ color: "#8B0000" }} // Dark red color
              >
                &#8249;
              </button>
            )}

            {/* Right Arrow */}
            {selectedIndex < dist.length - 1 && (
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-dark-red text-7xl font-bold z-50 w-18 h-18"
                onClick={showNextImage}
                style={{ color: "#8B0000" }} // Dark red color
              >
                &#8250;
              </button>
            )}

            {/* Image */}
            <img
              src={dist[selectedIndex]}
              alt="Enlarged"
              className="max-w-full max-h-screen"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
