import React from 'react';
import {BrowserRouter ,Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/home';

const RoutesNanny: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes> 
    </BrowserRouter>
    
  )
}

export default RoutesNanny;