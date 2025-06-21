// components/About.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, NavLink } from 'react-router-dom';

function ProductList() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Product List</h1>
      <p className="mt-2">
      <div>
    
      <img src="https://hips.hearstapps.com/hmg-prod/images/ripe-apple-royalty-free-image-1627317004.jpg" alt="placeholder" width="300" height="300"/>
      <><p>Apple</p></>
      <img src="https://www.organics.ph/cdn/shop/products/mango-ripe-250grams-per-piece-fruits-vegetables-fresh-produce-979218.jpg?v=1601479990" alt="placeholder" width="300" height="300"/>
      <><p>Mango</p></>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg/1200px-Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg" alt="placeholder" width="300" height="300"/>
      <><p>Strawberry</p></>
      <><p><NavLink to="/productdetails">Product Details</NavLink></p></>
  </div>
      </p>
    </div>
  );
}

export default ProductList;
