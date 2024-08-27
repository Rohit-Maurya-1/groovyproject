import React from "react";
import InstagramPosts from "../Components/InstagramPosts";
import i1 from "../../public/igpost/i1.jpeg";
import i2 from "../../public/igpost/i2.jpeg";
import i3 from "../../public/igpost/i3.jpeg";
import i4 from "../../public/igpost/i4.jpeg";
import i5 from "../../public/igpost/i5.jpeg";
import i6 from "../../public/igpost/i6.jpeg";
import i7 from "../../public/igpost/i7.jpeg";
import i8 from "../../public/igpost/i8.jpeg";
import IgPost from "../Components/IgPost";
const Media = () => {
  const accessToken = "YOUR_INSTAGRAM_ACCESS_TOKEN";
  const allImg = [i1, i2, i3, i4, i5, i6, i7, i8];

  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <h1 className="font-semibold text-4xl text-center mb-4">Instagram Feed</h1>
      {/* <InstagramPosts accessToken={accessToken} /> */}
      <div className="flex gap-8 flex-wrap justify-around px-16">
        {allImg.map((val, key) => {
          return <IgPost key={key} igPic={val} />;
        })}
      </div>
    </div>
  );
};

export default Media;
