import React, { useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Loader from "./Loader";
import ResturantDetails from "./ResturantDetails";
import { Link, Outlet } from "react-router-dom";
import useIsOnline from "../Utils/useIsOnline";
import Head from "./Head";
import useResturantData from "../Hooks/useResturantData";

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
  return allResturant.length === 0 ? (
    <Loader />
  ) : (
    <>
      <Head />
      <div className="w-9/12 mx-auto ">
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
      {filterResturants.length == 0 ? (
        <div className="text-center h-screen flex  items-center flex-col">
          <h1 className=" text-4xl font-bold my-3">Oops...</h1>
          <p className=" text-2xl">No match found for "{searchText}"</p>
        </div>
      ) : (
        <div className="flex gap-4 w-11/12  m-auto mr-0  mt-5 pb-3 flex-wrap ">
          {filterResturants.map((res) => (
            <Link to={"/resturant/" + res.info.id} key={res.info.id}>
              <RestaurantCard {...res.info} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default Body;
