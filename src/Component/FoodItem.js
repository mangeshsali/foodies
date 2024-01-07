import { useDispatch } from "react-redux";
import { IMG_CDN } from "../config";
import {
  removeItem,
  qualityIncrease,
  qualityDecrease,
} from "../Utils/cartSlice";
import { useState } from "react";
import { toast } from "react-hot-toast";
const FoodItem = ({ name, price, description, defaultPrice, imageId, id }) => {
  const dispatch = useDispatch();
  function removeHandler({ id }) {
    dispatch(removeItem({ id }));
    toast.success("Remove from Cart");
  }
  function qualityIncreaseHandler({ id }) {
    dispatch(qualityIncrease({ id }));
  }
  function qualityDecreaseHandler() {
    dispatch(qualityDecrease());
  }
  return (
    <>
      {" "}
      <div className=" w-6/12 bg-gray-100 mb-4 rounded-lg text-xl m-auto text-center  shadow-lg">
        <div className="flex p-2 m-2  justify-between items-center ">
          <div className="relative w-[50%]">
            <img alt="img" src={IMG_CDN + imageId} className=" rounded-lg" />
          </div>

          <div className=" m-2 w-[50%]">
            <div className=" text-start ">
              <h1 className=" font-medium">{name}</h1>
              <h2>
                {"₹ "}
                {price ? price / 100 : defaultPrice / 100}
              </h2>
              <div className=" flex  justify-between m-2 w-full border-[2px] rounded-sm">
                <button
                  className=" w-full"
                  onClick={() => qualityIncreaseHandler({ id })}
                >
                  +
                </button>
                <span className=" w-full text-center border-x-2">{}</span>
                <button
                  className=" w-full"
                  onClick={() => qualityDecreaseHandler()}
                >
                  -
                </button>
              </div>
              <button
                className=" bg-red-500 rounded-md w-full p-2 text-sm text-white  hover:bg-red-600 font-medium"
                onClick={() => removeHandler({ id })}
              >
                Remove Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FoodItem;
