import React from 'react'
import SearchBar from "../components/SearchBar.jsx";
import Tabs from "../components/Tabs.jsx";
import ResultGrid from "../components/ResultGrid.jsx";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const HomePage = () => {

  const { query } = useSelector((store) => store.search);

  return (
    <div>

      <SearchBar />

      {query !== "" ? <div><Tabs /><ResultGrid /></div> : ""}

    </div>
  )
}

export default HomePage