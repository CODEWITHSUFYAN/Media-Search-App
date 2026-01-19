import React from 'react'
import SearchBar from "../components/SearchBar.jsx";
import Tabs from "../components/Tabs.jsx";
import ResultGrid from "../components/ResultGrid.jsx";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const HomePage = () => {

  const { query } = useSelector((store) => store.search);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">

      <SearchBar />

      {query !== "" ? (
        <div>
          <Tabs />
          <ResultGrid />
        </div>
      ) : (
        <div className="w-full min-h-[calc(100vh-200px)] flex items-center justify-center px-4">
          <div className="text-center max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Welcome to Media Search</h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8">Discover and collect beautiful photos and videos from around the world</p>
            <div className="space-y-6 sm:space-y-8">
              <p className="text-sm sm:text-base text-gray-400">Try searching for:</p>
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
                <span className="bg-indigo-600/20 border border-indigo-500/50 text-indigo-300 px-4 sm:px-5 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium hover:bg-indigo-600/30 transition-all">Nature</span>
                <span className="bg-emerald-600/20 border border-emerald-500/50 text-emerald-300 px-4 sm:px-5 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium hover:bg-emerald-600/30 transition-all">Animals</span>
                <span className="bg-purple-600/20 border border-purple-500/50 text-purple-300 px-4 sm:px-5 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium hover:bg-purple-600/30 transition-all">Travel</span>
                <span className="bg-cyan-600/20 border border-cyan-500/50 text-cyan-300 px-4 sm:px-5 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium hover:bg-cyan-600/30 transition-all">Technology</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 mt-10 sm:mt-12">Start typing in the search bar to explore amazing content</p>
          </div>
        </div>
      )}

    </div>
  )
}

export default HomePage