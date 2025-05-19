import React from "react";
import Footer from "./Footer/Footer";
import DummyHome from "./Home/DummyHome";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Experience from "./Experiences/Experience";
import List from "./List/List";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/List" element={<List/>}/>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
