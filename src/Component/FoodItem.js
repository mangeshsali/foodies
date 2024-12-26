import { useDispatch, useSelector } from "react-redux";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IMG_CDN } from "../config";
import {
  removeItem,
  quantityIncrease,
  qualityDecrease,
  addItem,
} from "../Utils/cartSlice";
import { useState } from "react";
import { toast } from "react-hot-toast";

const FoodItem = ({ item, index }) => {
  const { card, quantity } = item;
  const { info } = card;
  const { name, price, defaultPrice, description, imageId, id } = info;
  const dispatch = useDispatch();

  function removeHandler({ id }) {
    dispatch(removeItem({ id }));
    toast.success("Remove from Cart");
  }

  return (
    <div className="w-full h-[160px] gap-6 border bg-white   p-2 rounded-lg text-xl  shadow-lg flex ">
      {/* Image */}
      <div className="w-[15%]   flex flex-col justify-between">
        <img
          alt="img"
          src={IMG_CDN + imageId}
          className=" rounded-md w-full h-[65%] object-cover"
        />

        {/* Quantity Control */}

        <div className="flex justify-between border border-slate-900 rounded-lg overflow-hidden">
          <button
            className="px-3 py-1 bg-slate-900  text-white"
            onClick={() => dispatch(qualityDecrease(index))}
          >
            <FaMinus className="text-[10px]" />
          </button>

          <button className="px-3 py-1" disabled={true}>
            {quantity}
          </button>

          <button
            className="px-3 py-1 bg-slate-900  text-white"
            onClick={() => dispatch(quantityIncrease(index))}
          >
            <FaPlus className="text-[12px]" />
          </button>
        </div>
      </div>

      {/* Info Section */}
      <div className=" flex flex-col justify-between">
        {/* Item Info */}
        <div>
          <h1 className="font-medium text-lg">{name}</h1>
          <h2 className="text-lg">
            {"₹ "}
            {price ? price / 100 : defaultPrice / 100}
          </h2>
          <p className="text-sm text-gray-500">
            {description?.length > 170
              ? description?.slice(0, 170) + "..."
              : description}
          </p>
        </div>

        {/* Remove Button */}
        <div className="block">
          <button
            className="bg-red-500 rounded-md  p-2 text-xs text-white hover:bg-red-600 font-medium mt-2"
            onClick={() => removeHandler({ id })}
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
