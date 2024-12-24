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

  const [visibleTab, setVisibleTab] = useState("");

  const handleTabClick = (title) => {
    setVisibleTab((prev) => (prev === title ? null : title)); // Toggle the tab
  };

  useEffect(() => {
    if (menuItem && menuItem.length > 0) {
      setVisibleTab(menuItem[0]?.card?.card?.title || "");
    }
  }, [menuItem]);

  return !itemDetail ? (
    <Loader />
  ) : (
    <>
      <div className="w-6/12 bg-red-500 shadow-xl p-2 rounded-lg text-xl m-auto text-center mb-6 mt-8 text-white flex justify-between">
        <div className="w-1/2">
          <h1 className="text-2xl font-semibold">
            {itemDetail?.name || "N/A"}
          </h1>
          <h1>
            {itemDetail?.areaName || "N/A"} - {itemDetail?.city || "N/A"}
          </h1>
          <h1 className="bg-green-600 w-16 mx-auto rounded-lg p-2 text-white my-2 text-sm">
            <span>⭐</span>
            {itemDetail?.avgRatingString || "N/A"}
          </h1>
          <div className="flex justify-evenly font-bold items-center">
            <RiMoneyDollarCircleFill />
            <p>{itemDetail?.costForTwoMessage || "N/A"}</p>

            <IoTimer />
            <p>{itemDetail?.sla?.slaString || "N/A"}</p>
          </div>
        </div>

        <div className="w-1/2 flex justify-center">
          <img
            alt="img"
            src={IMG_CDN + (itemDetail?.cloudinaryImageId || "")}
            className="w-56 rounded-lg h-48"
          />
        </div>
      </div>

      <div className="  w-6/12 bg-[#f0f8ff]  m-auto text-center p-4 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold">Menu</h1>
        <div>
          {menuItem?.map((menu) => (
            <ResturantCategory
              data={menu.card.card}
              isVisible={visibleTab === menu.card.card.title}
              onClick={() => handleTabClick(menu.card.card.title)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ResturantDetails;
