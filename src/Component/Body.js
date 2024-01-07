import React, { useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Loader from "./Loader";
import ResturantDetails from "./ResturantDetails";
import { Link, Outlet } from "react-router-dom";
import useIsOnline from "../Utils/useIsOnline";
import Head from "./Head";

function Body() {
  const [allResturant, setallResturant] = useState([]);
  const [filterResturants, setfilterResturant] = useState([]);
  const [searchText, setSearch] = useState("");
  function filterData(searchText, allResturant) {
    const fdata = allResturant.filter((rest) => {
      return rest.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    return fdata;
  }

  useEffect(() => {
    getResturant();
  }, []);

  async function getResturant() {
    const res = await fetch(
      "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D18.5204303%26lng%3D73.8567437%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
    );
    const js = await res.json();
    setallResturant(
      js.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setfilterResturant(
      js.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    console.log(filterResturants);
  }

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
      <div className="flex gap-4 w-11/12  m-auto mr-0  mt-5 pb-3 flex-wrap ">
        {filterResturants.map((res) => (
          <Link to={"/resturant/" + res.info.id} key={res.info.id}>
            <RestaurantCard {...res.info} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default Body;
