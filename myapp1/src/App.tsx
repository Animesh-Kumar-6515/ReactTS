import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './componenents/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './componenents/Home';
import View from './componenents/View';
import Login from './componenents/Login';
import AddProduct from './componenents/AddProduct';

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/view" element={<View/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/addproduct' element={<AddProduct/>}/>
        
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
