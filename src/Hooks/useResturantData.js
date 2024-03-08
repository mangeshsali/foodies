import React, { useEffect, useState } from "react";

const useResturantData = () => {
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
    console.log(allResturant);
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
