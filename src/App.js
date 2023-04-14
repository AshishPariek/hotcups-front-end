import React from "react";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { store } from "./Store/Store";
import Protacted from "./ProtactedRoutes/Protacted";
import Header from "./HomeScreen/Header";
import Home from "./HomeScreen/Home";
import AllShops from "./HomeScreen/AllShops";
import Dashboard from "./AdminScreen/Dashboard";
import LogIn from "./AdminScreen/LogIn";
import Register from "./AdminScreen/Register";
import AddShop from "./AdminScreen/AddShop";
import EditShop from "./AdminScreen/EditShop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Shop from "./HomeScreen/Shop";
import "./App.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <ToastContainer position="top-center" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Dashboard"
            element={<Protacted component={Dashboard} />}
          />
          <Route path="/AddShop" element={<AddShop />} />
          <Route path="/AllShops" element={<AllShops />} />
          <Route path="/EditShop/:id" element={<EditShop />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Shop/:id" element={<Shop />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
