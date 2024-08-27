import React, { useEffect } from "react";
import { gsap } from "gsap";
import anim from "../../public/anim.gif";

const FullScreenImage = () => {
  useEffect(() => {
    const timeline = gsap.timeline();

    // Initial animation: image covers the whole screen
    timeline.set(".full-screen-image", { display: "block", opacity: 1 });

    // Disappear animation after 5 seconds
    timeline.to(".full-screen-image", {
      duration: 1,
      opacity: 0,
      delay: 5,
      onComplete: () => {
        document.querySelector(".full-screen-image").style.display = "none";
      },
    });
  }, []);

  return (
    <div
      className="full-screen-image absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${anim})`, display: "none" }}
    ></div>
  );
};

export default FullScreenImage;
