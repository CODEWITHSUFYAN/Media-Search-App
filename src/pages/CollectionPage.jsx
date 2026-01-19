import React, { use } from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard.jsx";
import { clearCollection } from "../redux/features/collectionSlice.js";

const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items);

  const dispatch = useDispatch();

  const clearAll = () => {
    dispatch(clearCollection());
  };

  return (
    <div className="overflow-auto px-4 sm:px-6 lg:px-9 py-4 sm:py-6 min-h-screen bg-gray-50">
      {collection.length > 0 ? (
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800">Your Collection</h2>
          <button
            onClick={() => {
              clearAll();
            }}
            className="active:scale-95 transition-all duration-200 cursor-pointer bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base lg:text-lg font-medium rounded w-full sm:w-auto"
          >
            Clear Collection
          </button>
        </div>
      ) : (
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold py-10 sm:py-16 lg:py-20 text-gray-400 text-center">Collection is Empty</h2>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 w-full">
        {collection.map((item, index) => {
          return (
            <div key={index}>
              <CollectionCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollectionPage;