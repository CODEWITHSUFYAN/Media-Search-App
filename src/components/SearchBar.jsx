import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice.js";

const SearchBar = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(setQuery(text))
    setText("")
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-col sm:flex-row bg-(--c1) gap-3 sm:gap-5 p-4 sm:p-6 lg:p-10"
      >
        <input
          required
          type="text"
          placeholder="Search Anything..."
          className="flex-1 border-2 border-gray-300 focus:border-indigo-600 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base lg:text-xl rounded outline-none transition-colors"
          value={text}
          onChange={(e) => {
            setText(e.target.value)
          }}
        />
        <button className="active:scale-95 border-2 border-gray-300 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base lg:text-xl rounded outline-none cursor-pointer font-semibold transition-all duration-200 flex-shrink-0">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;