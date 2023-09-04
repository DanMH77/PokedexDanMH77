import React from 'react';
import eve from '../styles/images/133.png';
import '../styles/Section.css'
import pokeball from '../styles/images/2024-play-pokemon-169.png'


    function Section(){

 return (
<div className='section-1'>
<div className='new1'>
<img src={eve} className='imgnew1'/>
<h1 className='btn'>Eve es capaz de evolucionar de muchas maneras para adaptarse sin problemas a cualquier medio.</h1>
</div>

<div className='new2' >
    <img   src={pokeball} className='imgnew2' />

    <button className="btn"> <a className='textnew2'  href='https://www.pokemon.com/el/noticias-pokemon/novedades-sobre-la-temporada-de-la-serie-de-campeonatos-pokemon-2024' target='blank'>  ¡Descubre dónde se celebrarán los Campeonatos Internacionales de esta temporada y el enorme aumento de los premios otorgados en la Serie de Campeonatos!
</a> </button>
  
</div>

<div className='new2' >
    <img   src={pokeball} className='imgnew2' />

    <button className="btn"> <a className='textnew2'  href='https://www.pokemon.com/el/noticias-pokemon/novedades-sobre-la-temporada-de-la-serie-de-campeonatos-pokemon-2024' target='blank'>  ¡Descubre dónde se celebrarán los Campeonatos Internacionales de esta temporada y el enorme aumento de los premios otorgados en la Serie de Campeonatos!
</a> </button>
    
</div>

 </div>
)	}

export default Section;