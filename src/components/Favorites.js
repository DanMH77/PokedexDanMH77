import React, {useEffect,useState} from 'react';
import { getPokemonfavorite } from './Api';
import "../styles/Favorites.css"





    function Favorites(){

        const [favoritesPoke, setFavoritesPoke] = useState([]);



useEffect(() => {

    const fetchPokemonFavorites = async () => {
      try {
        const dataFavorites = await getPokemonfavorite();
        setFavoritesPoke(dataFavorites);

      } catch (error) {
        console.error("Error capturando Pokemon data", error);
      }
     
    };
    fetchPokemonFavorites();
  })


 return (
<>
<h1>Favorites Pokemon</h1>
<div className='dadContainer' >
{favoritesPoke.map((item, index) =>  {
return (
<div  className='mother' key={index}  >
<div class="parent4">
  <div class="card4">
      <div class="content-box4">
          <span class="card-title4">Nombre: <strong>{item.name}</strong></span>
          <p class="card-content4">
             Este pokemon fue agregado a favoritos de {item.id}° 
          </p>
          <span class="see-more4">See More</span>
      </div>
      <div class="date-box4">
        <img src={item.image} className='pokeImage' />
      </div>
  </div>
</div>




</div>
)


})}


</div>
 
  

 </>
)	}

export default Favorites;