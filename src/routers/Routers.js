import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Parts from "../pages/parts";
import PartDetails from "../pages/parts/details";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Register from "../pages/register";
import Login from "../pages/login";
import Profile from "../pages/profile";
import EditProfile from "../pages/profile/edit";
import Cart from "../pages/cart/Cart";
import Purchases from "../pages/purchases";
import SellerParts from "../pages/seller/parts/SellerParts";
import Propose from "../pages/seller/propose";
import SalesForSeller from "../pages/seller/sales";
import AuthUser from "../components/AuthUser";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ExpertSystem from "../pages/ExpertSystem";


import SellerDeletedParts from "../pages/seller/parts/deletedParts";


const Routers = () => {
  const navigate = useNavigate();

  const { http } = AuthUser();
  const [user, setUser] = useState([]);

  useEffect(() => {
    http
      .post("/me")
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        if (error.response && error.response.status == 401) {
          sessionStorage.removeItem("user");
          sessionStorage.removeItem("token");
        }
      });
  }, []);

  const isLoggedIn = Boolean(sessionStorage.getItem("token"));

  const isSeller = user.utype === "2";

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/parts" element={<Parts />} />
      <Route path="/parts/:id" element={<PartDetails />} />
      <Route path="/expertSystem" element={<ExpertSystem />} />

      {isLoggedIn && (
        <>
          <Route path="/Purchases" element={<Purchases />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/userProfile" element={<Profile />} />
          <Route path="/EditProfile" element={<EditProfile />} />

          {isSeller && (
            <>
              <Route path="/propose" element={<Propose />} />
              <Route path="/SalesForSeller" element={<SalesForSeller />} />

              <Route path="/SellerParts" element={<SellerParts />} />
              <Route
                path="/SellerDeletedParts"
                element={<SellerDeletedParts />}
              />
            </>
          )}
        </>
      )}
    </Routes>
  );
};

export default Routers;
