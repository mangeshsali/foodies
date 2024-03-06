import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const FAQ = ({ info }) => {
  const { title, desc } = info;
  const [isVisible, setisVisible] = useState(false);

  function Handler() {
    setisVisible(!isVisible);
  }

  return (
    <div className="">
      <div className="justify-center border rounded-xl m-2">
        <div>
          <div
            className="w-full flex justify-between p-2 rounded-lg font-bold text-md cursor-pointer items-center"
            onClick={Handler}
          >
            <div className=" flex items-center">
              <IoMdCheckmarkCircleOutline className="text-green-600  hover:text-green-800 text-3xl mr-2" />{" "}
              <span className="ml-2">{title}</span>
            </div>{" "}
            {/* Adjusted margin */}
            <span className="text-3xl">
              {isVisible ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </span>
          </div>
          <hr className=" " />
          <div className="">
            {isVisible && <h1 className="m-4 text-lg">{desc}</h1>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
