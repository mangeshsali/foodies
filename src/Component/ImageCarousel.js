import React, { useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const images = [
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Chole%20Bhature.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Burger.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pizza.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/North%20Indian.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Chinese.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Biryani.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Cake.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pasta.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Noodles.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Rolls.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Poha.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pav%20Bhaji.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Khichdi.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Gulab%20Jamun.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/South%20Indian.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Paratha.png",
];

const ImageCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + 8 >= images.length ? 0 : prevIndex + 8
    );
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex - 8 < 0
        ? images.length - (images.length % 8 || 8)
        : prevIndex - 8
    );
  };

  const visibleImages = images.slice(startIndex, startIndex + 8);

  return (
    <div className="flex flex-col items-center  w-[85%] mx-auto  py-8">
      <div className=" flex gap-4  items-center justify-between w-full px-4 ">
        <div>
          <h1 className="font-bold text-[30px] font-DM">
            What's on your mind?
          </h1>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handlePrev}
            className="text-black p-1 shadow border rounded-full text-2xl cursor-pointer"
          >
            <BsArrowLeftShort />
          </button>
          <button
            onClick={handleNext}
            className="text-black p-1 shadow border rounded-full text-2xl cursor-pointer"
          >
            <BsArrowRightShort />
          </button>
        </div>
      </div>

      <div className="overflow-hidden flex gap-2  w-full ">
        {visibleImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="w-[150px] h-[150px] object-cover flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
