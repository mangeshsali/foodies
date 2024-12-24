import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ResturantList from "./ResturantList";

const ResturantCategory = ({ data, isVisible, onClick }) => {
  return (
    <div className="">
      <div
        className="w-full flex justify-between p-2 my-2 font-bold text-md cursor-pointer"
        onClick={onClick}
      >
        <span>
          {data.title} ({data.itemCards.length})
        </span>
        <div className="text-3xl">
          {isVisible ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </div>
      </div>
      <hr className="my-3 border-t-2 border-gray-400" />
      <div>{isVisible && <ResturantList item={data.itemCards} />}</div>
    </div>
  );
};

export default ResturantCategory;
