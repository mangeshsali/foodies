import { useState, useEffect } from "react";
import { URL_MENU } from "../config";
import ResturantCategory from "../Component/ResturantCategory";
import { useSelector } from "react-redux";
const useResturant = (id) => {
  const [itemDetail, setitemDetail] = useState(null);
  const [menuItem, setMenuitem] = useState();
  const locationLat = useSelector((state) => state.locationDetail.lat);
  const locationLng = useSelector((state) => state.locationDetail.lng);

  useEffect(() => {
    getResturantDetails();
  }, []);

  async function getResturantDetails() {
    const res = await fetch(
      `${URL_MENU}lat=${locationLat}&lng=${locationLng}&restaurantId=${id}`
    );
    const js = await res.json();

    const itemDetailFilter = js?.data?.cards.filter(
      (ele) =>
        ele.card?.card["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    );

    setitemDetail(itemDetailFilter[0]?.card?.card?.info);

    setMenuitem(
      js?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (c) =>
          c.card?.card["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
    );
  }
  return {
    menuItem,
    itemDetail,
  };
};
export default useResturant;
