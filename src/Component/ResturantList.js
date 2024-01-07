import { useDispatch } from "react-redux";
import { IMG_CDN } from "../config";
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
            <div className=" text-start w-[85%]">
              <h1 className=" font-medium">{men.card.info.name}</h1>
              <h2>
                {"₹ "}
                {men.card.info.price
                  ? men.card.info.price / 100
                  : men.card.info.defaultPrice / 100}
              </h2>
              <p className=" text-sm">{men.card.info.description}</p>
            </div>
            <div className="relative w-[15%]">
              <img
                alt="img"
                src={IMG_CDN + men.card.info.imageId}
                className="mx-4 rounded-lg"
              />
              <div className=" ">
                <button
                  className=" bg-black text-white p-1 rounded-lg"
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
