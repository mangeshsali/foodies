import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearItem, getTotalAmount } from "../Utils/cartSlice";
import { Link, useAsyncError, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import imgLogo from "../Utils/shopping-cart-orange.svg";
import DetailCart from "./DetailCart";
const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function clearHandler() {
    dispatch(clearItem());
  }
  function returnHandler(e) {
    e.preventDefault();
    navigate("/Body");
  }
  const cartItem = useSelector((store) => store.cart.items);
  console.log(cartItem);
  const total = useSelector((store) => store.cart.cartTotalAmount);
  console.log(total);

  useEffect(() => {
    dispatch(getTotalAmount());
  }, [cartItem]);

  return (
    <>
      <div className=" min-h-screen">
        <div className="w-10/12 m-auto my-4">
          <h1 className=" text-3xl font-medium">Carts :- {cartItem.length}</h1>

          <button
            className=" bg-red-500 hover:bg-red-600 text-white rounded-lg p-2 text-lg m-2"
            onClick={() => clearHandler()}
          >
            Clear
          </button>
        </div>
        {cartItem.length === 0 ? (
          <div className="  w-10/12 bg-[#f0f8ff] shadow-xl rounded-xl mx-auto text-2xl  text-center p-8">
            <div className="flex justify-center">
              <img alt="img" src={imgLogo} className=" w-56 m-4"></img>
            </div>
            <p className="font-medium m-2">
              Your Cart is <span className=" text-red-500">Empty </span>!
            </p>
            <p className=" text-lg m-2">
              Must add items on cart before you proceed to the checkout.
            </p>
            <button
              className=" bg-red-500 hover:bg-red-600  text-white p-2 text-lg  rounded-full my-4"
              onClick={(e) => returnHandler(e)}
            >
              Return to Browse
            </button>
          </div>
        ) : (
          <div className=" w-10/12 bg-[#f0f8ff]  shadow-xl mx-auto flex justify-evenly rounded-lg py-4">
            <div className="flex flex-col w-[50%] ">
              {cartItem.map((item) => (
                <FoodItem {...item.card.info} key={item.card.info.id} />
              ))}
            </div>
            <DetailCart />
          </div>
        )}
      </div>
    </>
  );
};
export default Cart;
