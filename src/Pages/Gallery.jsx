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
import dl11 from "../../public/dl11.jpg";
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
import pb12 from "../../public/pb12.jpg";
import pb13 from "../../public/pb13.jpg";
import pb14 from "../../public/pb14.jpg";
import pb15 from "../../public/pb15.jpg";


const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const dist = [a, b, c, e, f, g,h,dl1,dl2,dl3,dl4,dl5,dl6,dl7,dl8,dl9,dl10,dl11,dl12,dl13,dl14,pb1,pb2,pb3,pb5,pb6,pb7,pb8,pb9,pb10,pb11,pb12,pb13,pb14,pb15];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="pt-16">
      <div className="flex px-16 flex-col items-center">
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
