import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RESTAURANT_LIST } from "../config";

const useResturantData = () => {
  const [allResturant, setallResturant] = useState([]);
  const [filterResturants, setfilterResturant] = useState([]);

  const locationLat = useSelector((state) => state.locationDetail.lat);
  const locationLng = useSelector((state) => state.locationDetail.lng);

  const [searchText, setSearch] = useState("");
  function filterData(searchText, allResturant) {
    const fdata = allResturant.filter((rest) => {
      return rest.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    return fdata;
  }

  useEffect(() => {
    getResturant();
  }, [locationLat, locationLng]);

  async function getResturant() {
    const res = await fetch(
      `${RESTAURANT_LIST}lat=${locationLat}&lng=${locationLng}`
    );

    console.log(`${RESTAURANT_LIST}lat=${locationLat}&lng=${locationLng}`);
    const js = await res.json();

    const restaurants =
      js.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    if (restaurants) {
      setallResturant(restaurants);
      setfilterResturant(restaurants);
    } else {
      console.error("Restaurants data not found");
    }
  }

  return {
    filterData,
    searchText,
    filterResturants,
    setSearch,
    allResturant,
    setallResturant,
    setfilterResturant,
  };
};

export default useResturantData;
