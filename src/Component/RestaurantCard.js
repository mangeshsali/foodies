import React, { useContext } from "react";
import { IMG_CDN } from "../config";
import userContext from "../Utils/userContext";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  locality,
  costForTwo,
}) => {
  return (
    <>
      <div className="cards rounded-md  bg-[#ebf3fa]">
        <img
          className=" w-[92%] h-40 m-2 rounded-md"
          alt="logo"
          src={IMG_CDN + cloudinaryImageId}
        ></img>
        <div className=" m-2">
          <h1 className=" font-medium">{name}</h1>
          <h2>{locality}</h2>
          <div className=" bg-green-600 w-14 rounded-lg text-center text-white">
            ⭐ {avgRating}
          </div>
          <h2 className=" text-lg">{costForTwo}</h2>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;
