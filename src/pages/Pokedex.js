import React from 'react';
import Pokedex33 from '../components/PokeCards';
import PageTitleChanger from '../components/SearchBar';
import "../styles/PokedexRout.css"

    function Pokedex(){

 return (
<div>

  <div   className='header' >
  <h1>Pokemon Go</h1>
  <PageTitleChanger/>
  </div>
    <Pokedex33/>
 </div>
)	}

export default Pokedex