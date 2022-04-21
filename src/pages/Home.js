import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Products from "../components/Products";
import Cart from "../components/Cart";

function Home() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={[<Header />, <Products />]} />
          <Route path="/cart" element={[<Header />, <Cart />]} />
        </Routes>
      </Router>
    </div>
  );
}

export default Home;
