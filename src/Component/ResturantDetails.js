import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN } from "../config";
import { URL_MENU } from "../config";
import useResturant from "../Utils/useResturant";
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";
import ResturantCategory from "./ResturantCategory";
import Loader from "./Loader";
import Head from "./Head";
import { IoTimer } from "react-icons/io5";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
const ResturantDetails = () => {
  const { id } = useParams();

  const { menuItem, itemDetail } = useResturant(id);

  return itemDetail.length === 0 ? (
    <Loader />
  ) : (
    <>
      <div className=" w-6/12 bg-red-500  shadow-xl p-2 rounded-lg text-xl m-auto text-center mb-6 mt-8 text-white flex justify-between ">
        <div className=" w-1/2">
          <h1 className="text-2xl font-semibold">{itemDetail.name}</h1>
          <h1>
            {itemDetail.areaName} - {itemDetail.city}
          </h1>
          <h1 className=" bg-green-600 w-16 mx-auto rounded-lg p-2 text-white my-2 text-sm">
            <span>⭐</span>
            {itemDetail.avgRatingString}
          </h1>
          <div className=" flex justify-evenly font-bold items-center">
            <RiMoneyDollarCircleFill />
            <p>{itemDetail.costForTwoMessage}</p>

            <IoTimer />
            <p>{itemDetail.sla.slaString}</p>
          </div>
        </div>

        <div className=" w-1/2 flex justify-center">
          <img
            alt="img"
            src={IMG_CDN + itemDetail.cloudinaryImageId}
            className=" w-56 rounded-lg h-48 "
          />
        </div>
      </div>
      <div className="  w-6/12 bg-[#ebf3fa]  m-auto text-center p-4 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold">Menu</h1>
        <div>
          {menuItem?.map((menu) => (
            <ResturantCategory data={menu.card.card} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ResturantDetails;
