import { useDispatch } from "react-redux";
import { IMG_CDN, IMG_NOTFOOD } from "../config";
import { addItem } from "../Utils/cartSlice";
import { configureStore } from "@reduxjs/toolkit";

import { toast } from "react-hot-toast";

const ResturantList = ({ item }) => {
  const dispatch = useDispatch();
  function handlerADD(men) {
    dispatch(addItem(men));
    toast.success("Added to the Cart");
  }

  return (
    <>
      {item.map((men) => (
        <>
          <div className="flex p-2 m-2  justify-between" key={men.card.info.id}>
            <div className=" text-start w-[85%] flex flex-col gap-3">
              <h1 className=" text-base font-medium">{men.card.info.name}</h1>
              <h2 className=" text-base">
                {"₹ "}
                {men.card.info.price
                  ? men.card.info.price / 100
                  : men.card.info.defaultPrice / 100}
              </h2>
              <p className=" text-sm  text-gray-500">
                {men.card.info.description}
              </p>
            </div>
            <div className="relative w-[140px] h-[120px] border">
              <img
                alt="img"
                src={IMG_CDN + men.card.info.imageId || IMG_NOTFOOD}
                className=" rounded-lg w-full h-full object-cover"
              />
              <div className="absolute -bottom-3 left-0 w-full flex justify-center">
                <button
                  className="text-green-500 font-bold bg-white border shadow-sm py-2  px-5 rounded-lg"
                  onClick={() => handlerADD(men)}
                >
                  ADD +
                </button>
              </div>
            </div>
          </div>
          <hr />
        </>
      ))}
    </>
  );
};
export default ResturantList;
