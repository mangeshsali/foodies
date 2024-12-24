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

function Body() {
  const {
    filterData,
    searchText,
    filterResturants,
    setSearch,
    allResturant,
    setallResturant,
    setfilterResturant,
  } = useResturantData();
  const isOnline = useIsOnline();
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
      <div className="w-full">
        <div className="w-[85%]  mx-auto ">
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
        </div>

        <div>
          <ImageCarousel />
        </div>

        <div className="w-[85%] mx-auto">
          {filterResturants.length == 0 ? (
            <div className="text-center h-screen flex  items-center flex-col">
              <h1 className=" text-4xl font-bold my-3">Oops...</h1>
              <p className=" text-2xl">No match found for "{searchText}"</p>
            </div>
          ) : (
            <div className=" gap-8 mt-8  grid grid-cols-4 w-full">
              {filterResturants.map((res) => (
                <Link to={"/resturant/" + res.info.id} key={res.info.id}>
                  <RestaurantCard {...res.info} />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Body;
