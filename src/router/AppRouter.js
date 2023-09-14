import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Navbar from '../components/Navbar';
import Pokedex from '../pages/Pokedex';
import Favorites from '../components/Favorites';
import InformationTotal from '../components/InformationTotal';


    function AppRouter(){

 return (
    <div>
    <Navbar/>
    <Routes>
     <Route path='/' element={<Home/>} /> 
     <Route path='/about' element={<About/>} /> 
     <Route path='/pokedex' element={<Pokedex/>} /> 
     <Route path='/favorites' element={<Favorites/>} /> 
     <Route path='/information/:id' element={<InformationTotal/>} /> 
    </Routes>
    </div>
    
    
    
     
)	
    
}

export default  AppRouter;