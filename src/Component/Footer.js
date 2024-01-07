import React, { useContext } from "react";
import userContext from "../Utils/userContext";
import image from "../logo.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
function Footer() {
  const { user } = useContext(userContext);
  return (
    <div className="bg-red-400 text-white mt-0 text-lg  w-full">
      <div className="flex items-center justify-center">
        Developed by Mangesh
        <span className="mx-2 cursor-pointer">
          <FaGithub />
        </span>
        <span className="mx-2 cursor-pointer">
          <FaLinkedin />
        </span>
      </div>
    </div>
  );
}

export default Footer;
