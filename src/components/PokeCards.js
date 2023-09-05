import React, { useEffect, useState } from 'react'
import { getPokemonList } from './Api'; 
import "../styles/PokeCards.css"


function Pokedex33() {

  const [Pokemons, setPokemons] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [newFavorite , setNewFavorite] = useState ('');
  const [loves, setLoves] = useState (0);

  const handleLoves = () => { 

  setLoves(loves +1);
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

      <div className="contenedor">
          {isLoading ? (
          Pokemons.map((item) => {

    return (
      <div className='card' key={item}>
      <img src={item.image}/>
      <p className='name'>{item.name}</p>
      <p className='name'>{item.id}</p>
      <button onClick={handleLoves}>{loves} {loves ===1? 'Love♥':'Loves♥'}</button>      
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