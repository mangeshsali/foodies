import { Link, Outlet } from "react-router-dom";
import React from "react";
import Profile from "./Profile";

const About = () => {
  return <>
    <div>About</div>
    <Link to="/about/profile">
     profile
    </Link>
    <Outlet/>
  </>;
};

export default About;
