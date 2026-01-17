import React from "react";

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CollectionPage from "./pages/CollectionPage.jsx";
import Navbar from "./components/Navbar.jsx"
import {ToastContainer} from "react-toastify"

const App = () => {
  return (
    <div className="min-h-screen w-full bg-gray-950 text-white">

      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/collection" element={<CollectionPage />}/>
      </Routes>

      <ToastContainer />
      
    </div>
  );
};

export default App;
