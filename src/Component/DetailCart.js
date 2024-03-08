import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearItem, getTotalAmount } from "../Utils/cartSlice";
import { Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect } from "react";

const DetailCart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const total = useSelector((store) => store.cart.cartTotalAmount);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function checkOutHandler() {
    navigate("/Body");
    toast.success(" 😄 Order place... Enjoy Your Meal");
    dispatch(clearItem());
    console.log("jjdjd");
  }

  return (
    <div className=" w-[50%] flex justify-center ">
      <div className=" w-[35%] mt-20 font-medium ">
        <h1 className=" text-3xl my-4">Orders Details</h1>
        <p>Total Quantity:- {cartItem.length}</p>
        <p>Discount: - </p>
        <hr className=" my-4 h-1 bg-black" />
        <p className=" my-4 font-bold  text-xl">Total :{total / 100}</p>
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
