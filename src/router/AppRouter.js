import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Navbar from '../components/Navbar';



    function AppRouter(){

 return (
    <div>
    <Navbar/>
    <Routes>
     <Route path='/' element={<Home/>} /> 
     <Route path='/about' element={<About/>} /> 
    </Routes>
    </div>
    
    
    
     
)	
    
}

export default  AppRouter;