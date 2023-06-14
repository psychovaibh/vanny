import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import NavBar from "./NavBar";
import Footer from "./Footer";
import Home from "./Home";
import Contact from "./Contact";
import Shop from "./Shop";
import ProductDetails from "./ProductDetails";
import ShopCart from "./ShopCart";
import Checkout from "./Checkout";
function App(props) {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop/:mc/:sc/:br" element={<Shop />} />
          <Route path="/productdetails" element={<ProductDetails />} />
          <Route path="/cart" element={<ShopCart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
