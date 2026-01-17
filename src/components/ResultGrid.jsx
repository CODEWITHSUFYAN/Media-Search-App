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
    return <h1>Error</h1>;
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="flex flex-wrap w-full justify-between gap-6 overflow-auto px-9">
      {results.map((item, index) => {
        return <div key={index}>
          <ResultCard item={item}/>
        </div>
      })}
    </div>
  );
};

export default ResultGrid;
