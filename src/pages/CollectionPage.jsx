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
    <div className="overflow-auto px-9 py-6">
      {collection.length > 0 ? (
        <div className="flex justify-between mb-6">
          <h2 className="text-3xl font-semibold">Your Collection</h2>
          <button
            onClick={() => {
              clearAll();
            }}
            className="active:scale-95 transition cursor-pointer bg-red-600 px-8 py-3 text-lg font-medium rounded"
          >
            Clear Collection
          </button>
        </div>
      ) : (
        <h2 className="text-3xl font-semibold py-10 text-gray-300 text-center">Collection is Empty</h2>
      )}

      <div className="flex flex-wrap w-full justify-start gap-6">
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
