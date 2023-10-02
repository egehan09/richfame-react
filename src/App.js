import './App.css';
import Index from './pages';
import About from './pages/about';
import Middle from './pages/middle'
import React,{useState} from 'react';
import Navbar from './components/navbar'
import Gallery from './pages/gallery';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
      {/* <Navbar/> */}
      <Routes>
                <Route path='/' element={<Index />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/middle' element={<Middle />}></Route>
                <Route path='/gallery' element={<Gallery />}></Route>
            </Routes>
      </>
  );
}

export default App;
