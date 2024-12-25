import React, { useRef, useState } from "react";
import { checkvalidate } from "../Utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import useIsOnline from "../Utils/useIsOnline";
import toast from "react-hot-toast";
import logo from "../logo.png";
import { FaUserAlt } from "react-icons/fa";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const LogIn = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [Errormessage, setErrormessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handler = () => {
    setSignInForm(!isSignInForm);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const submithandler = () => {
    const message = checkvalidate(email.current.value, password.current.value);
    setErrormessage(message);
    toast.success("Sign Successfully");

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormessage(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormessage(errorCode + "****" + errorMessage);
        });
    }
  };

  const isOnline = useIsOnline();
  return !isOnline ? (
    <h1 className=" bg-red-600 text-white text-3xl text-center">
      ⚠️ Check internet Connection
    </h1>
  ) : (
    <div className=" flex justify-center items-center h-screen flex-col banner">
      <img src={logo} alt="logo" className=" w-44 m-4"></img>
      <div className="w-full md:w-[60%] lg:w-[25%] mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-md border-2 ">
          {isSignInForm ? (
            <h1 className="text-2xl font-bold mb-4">Sign In</h1>
          ) : (
            <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
          )}

          <form
            className="flex flex-col space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            {!isSignInForm && (
              <input
                ref={name}
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-red-500"
                required
              />
            )}

            <div className="relative">
              <input
                ref={email}
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded-md p-2  w-full focus:outline-none focus:ring focus:border-red-500"
                required
              />
              <FaUserAlt className="absolute right-3 top-3 text-sm  text-gray-600 flex items-center" />
            </div>

            <div className="relative">
              <input
                ref={password}
                type={showPassword ? "text" : "password"} // Toggle between text and password
                placeholder="Password"
                className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring focus:border-red-500"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute top-3 right-3 text-base text-gray-600"
              >
                {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
              </button>
            </div>

            <button
              className="bg-red-500 text-white rounded-md py-2 px-4 hover:bg-red-600 focus:outline-none focus:ring focus:border-red-500"
              onClick={submithandler}
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className="text-lg font-semibold text-red-600 ">
              {Errormessage}
            </p>
          </form>

          <p
            className="mt-4 text-sm text-blue-500 hover:underline"
            onClick={handler}
          >
            {isSignInForm
              ? "New to Foodies? Sign Up Now"
              : "Already registered? Sign In Now."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
