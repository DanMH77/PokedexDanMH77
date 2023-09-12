import React, { useEffect, useState } from "react";
import { addPokemon, getPokemonList, getPokemonfavorite } from "./Api";
import "../styles/PokeCards.css";
import "bootstrap/dist/css/bootstrap.css";
import Pagination from "./Pagination";


function Pokedex33() {
  const [Pokemons, setPokemons] = useState([]);
  const [pokeTarget, setPokeTarget] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  var [newFavorite, setNewFavorite] = useState(false);
  const [page, setPage] = useState(0);
  const [searchItem, setSearchItem] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [update,setUpdate] = useState(false);
  const [favorites, setFavorites] = useState([]);
  function updatePage(e){
    setPage(e.target.value);
    setUpdate(!update)
  }


  const handleFavorite = (id) => {

    setNewFavorite(newFavorite = true)
    
   

    addPokemon(id)
    setUpdate(!update)
  };
  const totalPokemons = 400;
  const limit = 20;
  const limit2 = 400;
  function updatePage(e) {
    setPage(e.target.value);
  }



  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${
          page * limit
        }`;
        const url2 = `https://pokeapi.co/api/v2/pokemon?limit=${limit2}`;
        const response = await getPokemonList(url);
        const response2 = await getPokemonList(url2);
        const data = response.array;
        const data2 = response2.array;
        const dataFavorites = await getPokemonfavorite();
        setFavorites(dataFavorites);

       
        setPokeTarget(data2);
        setPokemons(data);
        setFilteredPokemon(data)
      } catch (error) {
        console.error("Error capturando Pokemon data", error);
      }
      setisLoading(true);
    };
    fetchPokemon();

  }, [page]);


 
  const handleSearch = (e) => {
    setSearchItem(e.target.value);
    let filter = [];
    if (searchItem.length > 0) {
      filter = pokeTarget.filter(
        (pokemon) =>
          pokemon.name
            .toLowerCase()
            .trim()
            .includes(searchItem.toLowerCase().trim()) || // Filtrar por nombre
          pokemon.id.toString().includes(searchItem) // Filtrar por ID
      );
      console.log("target",pokeTarget);
      setFilteredPokemon(filter);
    } else {
      filter = Pokemons.filter(
        (pokemon) =>
          pokemon.name
            .toLowerCase()
            .trim()
            .includes(searchItem.toLowerCase().trim()) || // Filtrar por nombre
          pokemon.id.toString().includes(searchItem) // Filtrar por ID
      );
      setFilteredPokemon(filter);
    }
  };

  return (
    <>
      <input   
        placeholder="Search a Pokemon"
        value={searchItem}
        onChange={handleSearch}
      />

      <div className="Varaja">
        {isLoading ? (
          filteredPokemon.map((item, index) => {
            return (
              <div className="parent" key={index}>
                <div className="card">
                  <div className="content-box">
                    <span className="card-title">
                      {item.name} <br></br> Numero:{item.id}
                    </span>
                    <p className="card-content">
                      tipo: {item.type} <br></br>
                      Base Experience: {item.experience}
                    </p>
         
                    {favorites.some(
                        (favorite) => favorite.idPokemon === item.id
                      ) ? (
                        <button  className="delete"   >
                          <div className="state" id="moon">Añadido❤️</div>
<div className="state" id="sun">Eliminar(fav)</div>
<span className="lightRotation"></span>
<span className="lightRotation2"></span>
<span className="lightRotation3"></span>
<span className="lightRotation4"></span>
                          </button>
                      ) : (
                    <button className="see-more" onClick={() => handleFavorite(item.id)}>
                      {newFavorite}{" "}
                      {newFavorite === true ? "añadido" : "Añadir🤍"}
                    </button>
                      )}
                  </div>
                  <div className="date-box">
                    <div className="month">
                      <img src={item.image} className="pokeImage" />
                    </div>
                    <span className="date"></span>
                  </div>
                </div>
              </div>
            );
          })
        ) : (

          <div className="spinnerContainer">
  <div className="spinner"></div>
  <div className="loader">
    <p>loading</p>
    <div className="words">
      <span className="word">ID</span>
      <span className="word">Pokemon</span>
      <span className="word">Names</span>
      <span className="word">Images</span>
      <span className="word">Cards</span>
    </div>
  </div>
</div>
        )}
        <Pagination
          limit={limit}
          totalPokemons={totalPokemons}
          updatePage={updatePage}
        />
      </div>
    </>
  );
}

export default Pokedex33;
