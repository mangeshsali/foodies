import React, { useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Loader from "./Loader";
import ResturantDetails from "./ResturantDetails";
import { Link, Outlet } from "react-router-dom";
import useIsOnline from "../Utils/useIsOnline";
import Head from "./Head";
import useResturantData from "../Hooks/useResturantData";
import ImageCarousel from "./ImageCarousel";
import Demo from "./Demo";
import TopResturant from "./TopResturant";
import { useSelector } from "react-redux";

function Body() {
  const {
    filterData,
    searchText,
    filterResturants,
    setSearch,
    allResturant,
    setallResturant,
    setfilterResturant,
    orginalData,
  } = useResturantData();

  const isOnline = useIsOnline();
  const LocationName = useSelector((state) => state.locationDetail.address);

  if (!isOnline) {
    return (
      <h1 className=" bg-red-600 text-white text-3xl text-center">
        ⚠️ Check internet Connection
      </h1>
    );
  }
  return allResturant.length === 0 || filterResturants.length === 0 ? (
    <Loader />
  ) : (
    <>
      <Head />
      <div className="w-full flex flex-col ">
        {/* <div className="w-[85%]  mx-auto ">
          <input
            className="h-8 border ml-10 mr-2"
            type="text"
            placeholder="Search resturant"
            value={searchText}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></input>
          <button
            className=" bg-red-500 text-white p-1 rounded-md"
            onClick={() => {
              const data = filterData(searchText, allResturant);
              setfilterResturant(data);
            }}
          >
            Search
          </button>
        </div> */}

        <div>
          <ImageCarousel />
        </div>

        {/* TOP Resturant */}

        <div>
          <TopResturant
            data={
              orginalData?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
            }
          />
        </div>

        <div className="w-[85%] mx-auto mt-14">
          {filterResturants.length == 0 ? (
            <div className="text-center h-screen flex  items-center flex-col mt-20">
              <h1 className=" text-4xl font-bold my-3">Oops...</h1>
              <p className=" text-2xl">No match found for "{searchText}"</p>
            </div>
          ) : (
            <div className=" p-4 flex flex-col gap-4">
              <div>
                <h1 className="font-bold text-[28px] font-DM">{`Restaurants with online food delivery in  ${
                  LocationName || ""
                }`}</h1>
              </div>
              <div className=" w-full">
                <div className="grid grid-cols-3 gap-6  w-[80%] mx-auto justify-between">
                  {filterResturants.map((res) => (
                    <Link to={"/resturant/" + res.info.id} key={res.info.id}>
                      <RestaurantCard {...res.info} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Body;
