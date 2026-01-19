import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos } from "../api/mediaApi.js";
import {
  setLoading,
  setError,
  setResults,
} from "../redux/features/searchSlice.js";
import ResultCard from "./ResultCard.jsx";

const ResultGrid = () => {
  const dispatch = useDispatch();

  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search
  );

  useEffect(() => {
    if(!query) return 
    const getData = async () => {
      try {
        dispatch(setLoading());

        let data = [];

        if (activeTab === "photos") {
          const response = await fetchPhotos(query);
          data = response.results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
            url : item.links.html
          }));
        }

        if (activeTab === "videos") {
          const response = await fetchVideos(query);
          data = response.videos.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user.name || "video",
            thumbnail: item.image,
            src: item.video_files[0].link,
            url : item.url
          }));
        }

        dispatch(setResults(data));
      } catch (err) {
        console.log(err);
        dispatch(setError(err.message));
      }
    };
    getData();
  }, [query, activeTab , dispatch]);

  if (error) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600 mb-4">⚠️ Error</h1>
          <p className="text-base sm:text-lg text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700">Loading...</h1>
          <p className="text-sm sm:text-base text-gray-500 mt-2">Searching for {activeTab}...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 w-full px-4 sm:px-6 lg:px-9 py-6">
      {results.map((item, index) => {
        return <div key={index}>
          <ResultCard item={item}/>
        </div>
      })}
    </div>
  );
};

export default ResultGrid;