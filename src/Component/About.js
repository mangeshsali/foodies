import { Link, Outlet } from "react-router-dom";
import React from "react";
import Profile from "./Profile";
import { useState } from "react";
import { data } from "../Utils/constant";
import FAQ from "./FAQ";
const About = () => {
  return (
    <>
      <div className="mt-8  flex   h-screen justify-center ">
        <div className="  w-1/2 ">
          <h1 className="font-bold text-3xl mb-5 ml-2">More About Foodies</h1>
          {data.map((m, index) => (
            <FAQ key={index} info={m} />
          ))}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default About;
