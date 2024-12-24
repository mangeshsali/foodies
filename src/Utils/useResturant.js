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
    console.log(js);

    const itemDetailFilter = js?.data?.cards.filter(
      (ele) =>
        ele.card?.card["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    );

    setitemDetail(itemDetailFilter[0]?.card?.card?.info);

    console.log(js?.data?.cards[2]?.card.card.info);
    setMenuitem(
      js?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (c) =>
          c.card?.card["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
    );
    console.log("menuItem", menuItem);
    console.log(itemDetail);
  }
  return {
    menuItem,
    itemDetail,
  };
};
export default useResturant;
