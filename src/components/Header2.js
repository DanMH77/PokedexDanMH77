import React, { useState, useEffect } from "react";
import { getRandomPokemonId } from "./poke-api"; 
import defaultImage from "../styles/images/ball-pokemon.gif";
import '../styles/Header2.css'

const Header2 = () => {
  const [randomPokemons, setRandomPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchRandomPokemons = async () => {
      try {

        const getRandomIds = () => Math.floor(Math.random() * 200) + 1;
        const pokemonIds = Array.from({ length: 8 }, getRandomIds);

        var fetchedPokemons = [];
        
  
         fetchedPokemons = await Promise.all(
            pokemonIds.map(async (id) => {
              const data = await getRandomPokemonId(id);
              return data;
          
            })
          );

        setRandomPokemons(fetchedPokemons);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching random Pokémon data:", error);
      }
    };

    fetchRandomPokemons();
  }, []);
  const handleImageLoad = (event) => {
    event.target.src = event.target.dataset.src;
  };

  return (
    <header>

      <div className="pokemon-container3">
        {randomPokemons.map((pokemon) => (
          <div key={pokemon.id} className="pokemon-card3">
            {isLoading ? (
                <p>Cargando.....</p>
            ): (
                <>
              <div className="loader3">
  <div className="cell d-0">   <img
                   src={defaultImage}
                   alt={pokemon.name}
                   data-src={pokemon.sprites.other["official-artwork"]["front_default"]} // Almacenar la URL real en un atributo personalizado
                   onLoad={handleImageLoad} // Manejador de carga de imagen
                   loading="lazy" // Agregar atributo "loading" con valor "lazy"
                   style={{ maxWidth: "100px", maxHeight: "100px" }} // Define un tamaño máximo
                    />
                 <p>{pokemon.name}</p> </div> 
</div>



               
                </>
            )
            }       
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header2;


