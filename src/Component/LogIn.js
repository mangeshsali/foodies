import React, { useRef, useState } from "react";
import { checkvalidate } from "../Utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import useIsOnline from "../Utils/useIsOnline";
import toast from "react-hot-toast";
import logo from "../logo.png";
const LogIn = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [Errormessage, setErrormessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handler = () => {
    {
      isSignInForm ? setSignInForm(false) : setSignInForm(true);
    }
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
          console.log(user);
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
      <div className="w-[25%]">
        <div className="bg-white p-8 rounded-lg shadow-md border-[2px]">
          {isSignInForm ? (
            <h1 className="text-2xl font-bold mb-4">Sign In</h1>
          ) : (
            <h1 className="text-2xl font-bold mb-4">Sign Out</h1>
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
            <input
              ref={email}
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-red-500"
              required
            />

            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-red-500"
              required
            />

            <button
              className="bg-red-500 text-white rounded-md py-2 px-4 hover:bg-red-600 focus:outline-none focus:ring focus:border-red-500"
              onClick={submithandler}
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className=" text-lg  font-semibold text-red-600 ">
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
