import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import useFetch from './api/api';
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home';
import AllProducts from './components/products/AllProducts';
import NavBar from './components/nav/NavBar';


function App() {

  const data = useFetch('https://fakestoreapi.com/products');


  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home products={data} />} />
        <Route path='/allProducts' element={<AllProducts products={data} />} />
      </Routes>
    </div>
  );
}

export default App;

