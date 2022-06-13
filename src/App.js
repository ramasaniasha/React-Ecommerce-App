import './App.css';
import Register from './Register';
import Login from './Login'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Home';
import Header from './Navbar';
import React, { useState } from 'react';
import Productlist from './Product/Product_list.js';
import Productdetail from './Product/Productdetail'
import Cart from './Product/cart';
import Profile from './Header/Profile';



function App() {

  return (
    <>
      <Router >
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/register" element={<Register />} />
          <Route path="/product" element={<Productlist />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/product/:id" element={<Productdetail />} />
          <Route path="/cart" element={<Cart />} />

        </Routes>
      </Router>
    </>

  );
}

export default App;
