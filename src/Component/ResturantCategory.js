import { useState } from "react";
import ResturantList from "./ResturantList";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const ResturantCategory = ({ data }) => {
  // console.log(data);
  const [isVisible, setisVisible] = useState(false);
  function Handler() {
    setisVisible(!isVisible);
  }
  return (
    <div className="">
      <div
        className="w-full flex justify-between p-2 my-2 font-bold text-md cursor-pointer"
        onClick={Handler}
      >
        <span>
          {data.title} ({data.itemCards.length})
        </span>
        <div className=" text-3xl">
          {isVisible ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </div>
      </div>
      <hr className="my-3 border-t-2 border-gray-400" />
      <div>
        {isVisible && <ResturantList item={data.itemCards} key={data.title} />}
      </div>
    </div>
  );
};
export default ResturantCategory;
