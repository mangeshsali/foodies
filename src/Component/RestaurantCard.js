import React from "react";
import { IMG_CDN, IMG_NOTFOOD } from "../config";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  locality,
  costForTwo,
}) => {
  return (
    <div className="rounded-lg shadow-lg w-[310px] bg-white overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <img
        className="w-full h-[150px] object-cover"
        alt={name}
        src={IMG_CDN + cloudinaryImageId || IMG_NOTFOOD}
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold text-gray-800 truncate">{name}</h1>
        <p className="text-sm text-gray-500 truncate">{cuisines?.join(", ")}</p>
        <p className="text-sm text-gray-500 line-clamp-2">{locality}</p>
        <div className="flex items-center justify-between mt-3">
          <div
            className={`flex items-center px-2 py-1 rounded-lg text-white ${
              avgRating >= 4
                ? "bg-green-600"
                : avgRating >= 3
                ? "bg-yellow-500"
                : "bg-red-500"
            }`}
          >
            <span className="text-sm font-medium">⭐ {avgRating}</span>
          </div>
          <p className="text-sm text-gray-600">{costForTwo}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
