import { useState, useEffect } from "react";
import { URL_MENU } from "../config";
import ResturantCategory from "../Component/ResturantCategory";
const useResturant = (id) => {
  const [itemDetail, setitemDetail] = useState([]);
  const [menuItem, setMenuitem] = useState();
  useEffect(() => {
    getResturantDetails();
  }, []);

  async function getResturantDetails() {
    const res = await fetch(URL_MENU + id);
    const js = await res.json();
    console.log(js);

    setitemDetail(js?.data?.cards[0]?.card.card.info);

    console.log(js?.data?.cards[0]?.card.card.info);
    setMenuitem(
      js.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (c) =>
          c.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
    );
    console.log(menuItem);
    console.log(itemDetail);
  }
  return {
    menuItem,
    itemDetail,
  };
};
export default useResturant;
