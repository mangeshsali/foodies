import { useState } from "react";
import ResturantList from "./ResturantList";
const ResturantCategory = ({ data }) => {
  // console.log(data);
  const [isVisible, setisVisible] = useState(false);
  function Handler() {
    setisVisible(!isVisible);
  }
  return (
    <div className="">
      <div
        className="w-full flex justify-between p-2 m-2 rounded-lg border-2 font-bold text-md cursor-pointer"
        onClick={Handler}
      >
        <span>
          {data.title} ({data.itemCards.length})
        </span>
        <span className=" text-3xl ">▼</span>
      </div>
      <div>
        {isVisible && <ResturantList item={data.itemCards} key={data.title} />}
      </div>
    </div>
  );
};
export default ResturantCategory;
