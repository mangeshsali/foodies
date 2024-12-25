import React, { useEffect, useState } from "react";
import { IoCloseCircle, IoLocationOutline } from "react-icons/io5";
import { ADDRESS_RECOMENDATION, LOCATION_API } from "../config";
import { useDispatch, useSelector } from "react-redux";
import {
  addAddress,
  addLat,
  addLng,
  addLocation,
} from "../Utils/LocationSlice";
import { useNavigate } from "react-router-dom";
import { clearItem } from "../Utils/cartSlice";

const SidebarLocation = ({ Handler }) => {
  const [query, setQuery] = useState("");
  const [LocationData, setLocationData] = useState(null);
  const [debounceTimeout, setDebounceTimeout] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const locationID = useSelector((state) => state.locationDetail.locationId);


  const onChangeHandler = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  const SetLatAndLong = async (id) => {
    try {
      const response = await fetch(`${ADDRESS_RECOMENDATION}${id}`);
      const result = await response.json();
      dispatch(addLat(result?.data[0]?.geometry?.location?.lat));
      dispatch(addLng(result?.data[0]?.geometry?.location?.lng));
    } catch (error) {
      console.error("Error fetching location data:", error);
    }
  };

  const PassDataHandler = (data) => {
    navigate("/body");
    dispatch(addLocation(data?.place_id));
    dispatch(addAddress(data?.structured_formatting.main_text));
    SetLatAndLong(data?.place_id);
    dispatch(clearItem());
    Handler();
  };

  useEffect(() => {
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    const timeout = setTimeout(() => {
      const fetchLocationData = async () => {
        try {
          const response = await fetch(`${LOCATION_API}${query}`);
          const result = await response.json();
          setLocationData(result?.data);
        } catch (error) {
          console.error("Error fetching location data:", error);
        }
      };

      if (query) {
        fetchLocationData();
      }
    }, 200);

    setDebounceTimeout(timeout);

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div className="sidebar sidebar-container">
      <div className="flex justify-end p-4 cursor-pointer" onClick={Handler}>
        <IoCloseCircle className="text-black text-3xl" />
      </div>

      <div className="flex justify-center">
        <input
          type="text"
          className="border p-3 w-[70%] rounded-md"
          placeholder="Search area, street name"
          onChange={onChangeHandler}
        />
      </div>

      {LocationData &&
        LocationData.map((item) => {
          return (
            <div
              className="flex w-full justify-center cursor-pointer"
              onClick={() => PassDataHandler(item)}
            >
              <div className="gap-3  border-b-2 border-dashed items-center w-[70%] flex p-4">
                <div>
                  <IoLocationOutline className="text-2xl" />
                </div>
                <div>
                  <h1>{item?.structured_formatting.main_text}</h1>

                  <p className=" text-sm text-gray-500">
                    {item?.structured_formatting.secondary_text}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SidebarLocation;
