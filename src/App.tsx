import React, { useState } from 'react';
import { useQuery } from 'react-query';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import useFetch from './api/api';
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home';
import AllProducts from './components/products/AllProducts';
import NavBar from './components/nav/NavBar';
import Mens from './components/products/Mens';
import Womens from './components/products/Womens';
import Jewellery from './components/products/Jewellery';
import Electronics from './components/products/Electronics';
import Products from './components/products/Products';
import { cartContext, countContext } from './context/Context';


function App() {

  const productData = useFetch('https://fakestoreapi.com/products')


  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home products={productData} />} />
        <Route path='products' element={<Products products={productData} />}>
          <Route path='allProducts' element={<AllProducts products={productData} />} />
          <Route path='mens' element={<Mens products={productData} />} />
          <Route path='womens' element={<Womens products={productData} />} />
          <Route path='jewelery' element={<Jewellery products={productData} />} />
          <Route path='electronics' element={<Electronics products={productData} />} />
        </Route>
      </Routes>
    </div >
  );
}

export default App;

