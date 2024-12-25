import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IMG_CDN, IMG_NOTFOOD } from "../config";
import { FaRegClock } from "react-icons/fa";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const TopResturant = ({ data: TopRestData }) => {
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0); // Track the start index
  const itemsPerPage = 3; // Number of visible cards at a time

  const LocationName = useSelector((state) => state.locationDetail.address);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - itemsPerPage : 0
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage < TopRestData.length
        ? prevIndex + itemsPerPage
        : prevIndex
    );
  };

  const ClickHandler = (id) => {
    navigate(`/resturant/${id}`);
  };
  return (
    <div className="w-[85%] mx-auto p-4 flex flex-col gap-4 ">
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold text-[28px] font-DM ">{`Top Restaurants Chains in ${
            LocationName || ""
          }`}</h1>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handlePrev}
            className={`text-black p-2 shadow border rounded-full text-2xl cursor-pointer ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <BsArrowLeftShort />
          </button>
          <button
            onClick={handleNext}
            className={`text-black p-2 shadow border rounded-full text-2xl cursor-pointer ${
              currentIndex + itemsPerPage >= TopRestData.length
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            <BsArrowRightShort />
          </button>
        </div>
      </div>
      <div className="flex overflow-hidden">
        <div
          className="flex transition-transform duration-300 gap-5"
          style={{
            transform: `translateX(-${currentIndex * (310 + 16)}px)`,
          }}
        >
          {TopRestData &&
            TopRestData.map((ele, index) => {
              const {
                name,
                cuisines,
                locality,
                avgRating,
                costForTwo,
                cloudinaryImageId,
                sla,
                id,
              } = ele.info;
              return (
                <div
                  key={index}
                  className="relative  w-[310px] h-[300px] flex flex-col shadow-lg cursor-pointer"
                  onClick={() => ClickHandler(id)}
                >
                  <img
                    src={IMG_CDN + cloudinaryImageId || IMG_NOTFOOD}
                    className="w-full h-[60%] object-cover rounded-2xl"
                    alt={name}
                  />
                  <div className=" p-2">
                    <h1 className="text-lg font-semibold text-gray-800 truncate">
                      {name}
                    </h1>
                    <p className="text-sm text-gray-500 truncate">
                      {cuisines?.join(", ")}
                    </p>
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {locality}
                    </p>
                    <div className="flex items-center gap-8 mt-3">
                      <div
                        className={`flex items-center px-2 py-1 rounded-lg text-white ${
                          avgRating >= 4
                            ? "bg-green-600"
                            : avgRating >= 3
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                      >
                        <span className="text-sm font-medium">
                          ⭐ {avgRating}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaRegClock className="text-gray-500 text-lg" />
                        <p className="text-gray-500 font-medium text-base">
                          {sla.slaString}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[140px] px-4 bg-gradient-to-t from-transparent via-[rgba(0,0,0,0.5)] to-transparent">
                    <p className="text-2xl text-white font-bold uppercase">
                      {costForTwo}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default TopResturant;
