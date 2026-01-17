import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice.js";

const Tabs = () => {
  const tabs = ["photos", "videos"];

  const dispatch =  useDispatch()

  const activeTab =  useSelector((state) => state.search.activeTab)

  return (
    <div className="flex gap-10 p-10">
      {tabs.map(function (element, index) {
        return (
          <button
            className={`${activeTab == element ? "bg-blue-600" : "bg-gray-600"} transition cursor-pointer active:scale-95 px-5 py-2 rounded uppercase`}
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
