import React, { useState } from "react";
import a from "../../public/a.jpeg";
import b from "../../public/b.jpeg";
import c from "../../public/c.jpeg";
import d from "../../public/d.jpeg";
import e from "../../public/e.jpeg";
import f from "../../public/f.jpeg";
import g from "../../public/g.jpeg";
import h from "../../public/h.jpeg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const dist = [a, b, c, e, f, g];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="pt-16">
      <div className="flex px-16 h-[100vh] flex-col items-center">
        <h2 className="mt-8 text-4xl items-center justify-center leading-tight w-full text-black sm:text-4xl lg:text-4xl flex flex-col mb-4">
          <p className="font-semibold text-4xl">Our Distributors</p>
        </h2>
        <div className="flex flex-wrap justify-evenl items-stretch rounded">
          {dist.map((val, key) => {
            return (
              <div key={key} className="rounded-xl m-1">
                <img
                  src={val}
                  alt={`Distributor ${key}`}
                  className="w-48 h-48 object-cover cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
                  onClick={() => handleImageClick(val)}
                />
              </div>
            );
          })}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative">
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold z-50"
              onClick={closeImage}
            >
              &times;
            </button>
            <img
              src={selectedImage}
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
