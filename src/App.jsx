import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/Footer/Footer";

const Home = lazy(() => import("./component/Home/Home"));
const AllProducts = lazy(() => import("./component/AllProducts/AllProducts"));
const CheckOut = lazy(() => import("./component/Checkout/CheckOut"));
const SignIn = lazy(() => import("./component/SignIn/SignIn"))
const LogIn = lazy(() => import("./component/Login/LogIn"))
const Booked = lazy(() => import('./component/Booked/Booked'))

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Suspense fallback={<div>Loading....</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/allProducts" element={<AllProducts />} />
            <Route path="/shoes" element={<AllProducts category='Shoes'/>} />
            <Route path="/furniture" element={<AllProducts category='Furniture'/>} />
            <Route path="/electronics" element={<AllProducts category='Electronics'/>} />
            <Route path="/clothes" element={<AllProducts category='Clothes'/>} />
            <Route path="/others" element={<AllProducts category='Others'/>} />
            <Route path='/checkout' element={<CheckOut/>}/>
            <Route path='/signIn' element={<SignIn/>}/>
            <Route path='/logIn' element={<LogIn/>}/>
            <Route path='/success' element={<Booked/>}/>
          </Routes>
        </Suspense>
      </Router>
      <Footer />
    </div>
  );
}
