import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearItem, getTotalAmount } from "../Utils/cartSlice";
import { Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect } from "react";

const DetailCart = () => {
  const cartItem = useSelector((store) => store.cart.totalQuantity);
  const total = useSelector((store) => store.cart.totalPrice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function checkOutHandler() {
    navigate("/Body");
    toast.success(" 😄 Order place... Enjoy Your Meal");
    dispatch(clearItem());
  }

  return (
    <div className=" w-full flex justify-center  ">
      <div className="mt-20 ">
        <h1 className=" text-3xl ">Orders Details</h1>
        <p>Total Quantity:- {cartItem}</p>
        <p>Discount: - 0</p>
        <hr className=" my-4 h-1 bg-black" />
        <p className=" my-4 font-bold  text-xl">Total :{total}</p>
        <div>
          <button
            className="bg-red-500 p-4 rounded-xl text-white font-medium hover:bg-red-600"
            onClick={checkOutHandler}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailCart;
