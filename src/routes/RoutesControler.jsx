import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "../pages/contact/Contact";
import Deals from "../pages/deals/Deals";
import Diensten from "../pages/diensten/Diensten";
import Home from "../pages/home/Home";

export default function RoutesControler() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/diensten" element={<Diensten />} />
      <Route path="/deals" element={<Deals />} />
    </Routes>
  );
}
