import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import AllShops from "./Components/AllShops";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AllShops" element={<AllShops />} />
      </Routes>
    </>
  );
}

export default App;
