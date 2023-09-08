import React from 'react';
import eve from '../styles/images/133.png';
import '../styles/Section.css'
import pokeball from '../styles/images/2024-play-pokemon-169.png'


    function Section(){

 return (

 <div  className='ContainerNews' >


<div  className='newprincipal'>

<div className='new1'>
<img src={eve} className='imgnew1'/>
</div>
<h1  className='text1'>Eve es capaz de evolucionar de muchas maneras para adaptarse sin problemas a cualquier medio.
Un extraño Pokémon que se adapta a los entornos más hostiles gracias a sus diferentes evoluciones. Su irregular estructura genética encierra el secreto de su capacidad para adoptar evoluciones de lo más diversas. La configuración genética de Eevee le permite mutar y adaptarse enseguida a cualquier medio en el que viva.</h1>

</div>





{/*                                 */}




<div className='section-1'>

<div className='new2' >
    <img   src={pokeball} className='imgnew2' />

    <button > <a   href='https://www.pokemon.com/el/noticias-pokemon/novedades-sobre-la-temporada-de-la-serie-de-campeonatos-pokemon-2024' target='blank'>  ¡Descubre dónde se celebrarán los Campeonatos Internacionales de esta temporada y el enorme aumento de los premios otorgados en la Serie de Campeonatos!
</a> </button>
  
</div>


<div className='new2' >
<iframe  className='VideoChamp' width="300" height="300" src="https://www.youtube.com/embed/7D5IXI6lHg0?si=nFL1g-Z_iT3iQ_En" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
   <div  className='containerText' >
    <a  className='textNew3' href='https://youtu.be/7D5IXI6lHg0?feature=shared' target='blank'> La más reciente edición del Pokémon World Championships 2023 ya llegó a su fin. Fue un evento lleno de competencias, con encuentros de diferentes juegos de Pokémon que pasarán a la historia.
</a>
   </div>
    
</div>

 </div>

 </div>   

)	}
export default Section;