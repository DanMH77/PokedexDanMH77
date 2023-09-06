import React, { useEffect, useState } from 'react'
import { getPokemonList } from './Api'; 
import "../styles/PokeCards.css"


function Pokedex33() {

  const [Pokemons, setPokemons] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [newFavorite , setNewFavorite] = useState (false);
  const [loves, setLoves] = useState (0);

  const handleLoves = () => { 

  setLoves(loves +1);
  };


  const handleFavorite = () => {
setNewFavorite(newFavorite = true)

  };

    useEffect(() => {
      const fetchPokemon = async () => {
        try {

         const url = "https://pokeapi.co/api/v2/pokemon?Limit=20"
         const fetchedPokemons = [];
         const response= await getPokemonList(url);
         const data=response.array

         setPokemons(data);

        } catch (error) {
          console.error("Error capturando Pokemon data", error);
        }
        setisLoading(true);
      };
      fetchPokemon();

    },[]);
 
    return (

      <div className="Varaja">
          {isLoading ? (
          Pokemons.map((item) => {

    return (
      

      <div class="parent">
  <div class="card">
      <div class="content-box">
          <span class="card-title">
          {item.name} <br></br> Numero:{item.id}
          </span>
          <p class="card-content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          </p>
        
<button className='see-more'  onClick={handleFavorite}>{newFavorite} {newFavorite === true? 'añadido':'Añadir favorito'}</button>   
 
      </div>
      <div class="date-box">
          <div class="month">
  <img src={item.image}  className='pokeImage' />

          </div>
          <span class="date"></span>
      </div>
  </div>
</div>
 
        );
      })
    ) : (
      <h2 className='loading'>Esta Cargando...</h2>
      
      )}
    </div>
 
  )
}

export default Pokedex33;