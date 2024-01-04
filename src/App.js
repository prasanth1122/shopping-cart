import React,{useEffect, useContext} from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
// Components
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
import ShoppingCart from './Components/ShoppingCart';
// import MyCartContext from './Contexts/MyCartContext';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/shoppingCart' element={<ShoppingCart/>}/>
      </Routes>
    </div>
  );
}

export default App;
