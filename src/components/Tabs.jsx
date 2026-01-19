import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice.js";

const Tabs = () => {
  const tabs = ["photos", "videos"];

  const dispatch =  useDispatch()

  const activeTab =  useSelector((state) => state.search.activeTab)

  return (
    <div className="flex gap-4 sm:gap-6 lg:gap-10 p-4 sm:p-6 lg:p-10">
      {tabs.map(function (element, index) {
        return (
          <button
            className={`${activeTab == element ? "bg-blue-600 text-white shadow-lg" : "bg-gray-600 text-white hover:bg-gray-700"} transition-all duration-200 cursor-pointer active:scale-95 px-4 sm:px-5 py-2 sm:py-3 text-sm sm:text-base lg:text-lg rounded uppercase font-semibold`}
            key={index}
            onClick={() => {
                dispatch(setActiveTabs(element))
            }}
          >
            {element}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;