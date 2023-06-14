import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import NavBar from "./NavBar";
import Footer from "./Footer";
import Home from "./Home";
import Contact from "./Contact";
import Shop from "./Shop";
function App(props) {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
