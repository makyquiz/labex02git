// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import "./App.css";
import "./index.css";
import Home from './Home';
import ProductList from './ProductList';
import Cart from './Cart'
import ProductDetails from './ProductDetails';

function App() {

  return (
    <Router>
      <div className="p-4">
        <nav className="mb-4 space-x-4">
            <>
              <Link to="/home">Home</Link>
              <>      </>
              <Link to="/productlist">Product List</Link>
              <>      </>
              <Link to="/cart">Cart</Link>
            </>
        </nav>
        <Routes>
          <Route
            path="/"
            element={

                <Navigate to="/home" />
            }
          />
          <Route
            path="/home"
            element={
              <Home />
            }
          />
          <Route
            path="/productlist"
            element={
              <ProductList />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart />
            }
          />
          <Route
            path="/productdetails"
            element={
              <ProductDetails />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
