import React, { useEffect, useState } from "react";
import { getPokemonList } from "./Api";
import "../styles/PokeCards.css";
import "bootstrap/dist/css/bootstrap.css";
import Pagination from "./Pagination";

function Pokedex33() {
  const [Pokemons, setPokemons] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [newFavorite, setNewFavorite] = useState(false);
  const [loves, setLoves] = useState(0);
  const [page,setPage]=useState(0)
  const[searchItem,setSearchItem] = useState ('');


  const handleLoves = () => {
    setLoves(loves + 1);
  };

  const handleFavorite = () => {
    setNewFavorite((newFavorite = true));
  };
  const totalPokemons = 400;
  const limit = 20;
  const limit2 = 400;
function updatePage(e){
  setPage(e.target.value)
}
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${
          page * limit
        }`;
        const url2 = `https://pokeapi.co/api/v2/pokemon?limit=${limit2}`
        const fetchedPokemons = [];
        const response = await getPokemonList(url);
        const data = response.array;
        

        setPokemons(data);
      } catch (error) {
        console.error("Error capturando Pokemon data", error);
      }
      setisLoading(true);
    };
    fetchPokemon();
  }, [page]);


  const handleSearch = (e) => {
    setSearchItem(e.target.value);
      };
      const filteredPokemon = Pokemons.filter(
        (pokemon) =>
          pokemon.name.toLowerCase().trim().includes(searchItem.toLowerCase().trim()) || // Filtrar por nombre
          pokemon.id.toString().includes(searchItem) // Filtrar por ID
      );

  return (
    <>
      <input  placeholder="Search a Pokemon"
      value={searchItem}
      onChange={handleSearch}
         /><button>Search🔎</button>
    <div className="Varaja">
    
    
      {isLoading ? (
        filteredPokemon.map((item,index) => {
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

                  <button className="see-more" onClick={handleFavorite}>
                    {newFavorite}{" "}
                    {newFavorite === true ? "añadido" : "Añadir favorito"}
                  </button>
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
          <h2 className="loading">Esta Cargando...</h2>
          )}
    <Pagination limit={limit} totalPokemons={totalPokemons} updatePage={updatePage} />
    </div>
    </>
  );
}

export default Pokedex33;
