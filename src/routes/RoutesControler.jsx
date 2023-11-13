import { Route, Routes } from "react-router-dom";
import AlgemeneVoorwaarden from "../pages/Privacy/AlgemeneVoorwaarden";
import Cookiebeleid from "../pages/Privacy/Cookiebeleid";
import Privacybeleid from "../pages/Privacy/Privacybeleid";
import Contact from "../pages/contact/Contact";
import Deals from "../pages/deals/Deals";
import Diensten from "../pages/diensten/Diensten";
import FilterProduct from "../pages/filter-product/FilterProduct";
import Home from "../pages/home/Home";
import OntruimingForm from "../pages/ontruiming-form/OntruimingForm";
import OpkopenForm from "../pages/opkopen-form/OpkopenForm";
import Product_detail from "../pages/product-details/Product_detail";

export default function RoutesControler() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/diensten" element={<Diensten />} />
      <Route path="/deals" element={<Deals />} />
      <Route path="/deals/product-details" element={<Product_detail />} />
      <Route path="/deals/product-filter" element={<FilterProduct />} />
      <Route path="/diensten/opkopen-form" element={<OpkopenForm />} />
      <Route path="/diensten/ontruiming-form" element={<OntruimingForm />} />
      <Route path="/cookiebeleid" element={<Cookiebeleid />} />
      <Route path="/privacybeleid" element={<Privacybeleid />} />
      <Route path="/algemene-voorwaarden" element={<AlgemeneVoorwaarden />} />
    </Routes>
  );
}
