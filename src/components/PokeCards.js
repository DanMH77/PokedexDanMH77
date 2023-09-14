import React, { useEffect, useState } from "react";
import {
  addPokemon,
  deletePokemonesFavoritos,
  getPokemonList,
  getPokemonfavorite,
} from "./Api";
import "../styles/PokeCards.css";
import "bootstrap/dist/css/bootstrap.css";
import Pagination from "./Pagination";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Pokedex33() {
  const [Pokemons, setPokemons] = useState([]);
  const [pokeTarget, setPokeTarget] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  var [newFavorite, setNewFavorite] = useState(false);
  const [page, setPage] = useState(0);
  const [searchItem, setSearchItem] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [update, setUpdate] = useState(false);
  const [favorites, setFavorites] = useState([]);
  function updatePage(e) {
    setPage(e.target.value);
    setUpdate(!update);
  }

  const navigate = useNavigate();

  async function handleFavorite(name, image, idpokedex) {
    setNewFavorite((newFavorite = true));
    Swal.fire({
      title: "This Pokemon is now one of your favorites", 
      confirmButtonText: "Great",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Added!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
    addPokemon(name, image, idpokedex);
    setUpdate(!update);
  }

  async function deletepokemons(name) {
    setNewFavorite((newFavorite = true));
    Swal.fire({
      title: "This Pokemon was removed from favorites", 
      confirmButtonText: "OK",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Removed!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
    await deletePokemonesFavoritos(name);
    setUpdate(!update);
  }

  function reload() {
    window.location.reload();
  }

  const totalPokemons = 400;
  const limit = 20;
  const limit2 = 400;
  function updatePage(e) {
    setPage(e.target.value);
    setUpdate(!update);
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
        setFilteredPokemon(data);
      } catch (error) {
        console.error("Error capturando Pokemon data", error);
      }
      setisLoading(true);
    };
    fetchPokemon();
  }, [update]);

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
      console.log("target", pokeTarget);
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
      />{" "}
      <button onClick={() => reload()} >Return</button>
      <div className="Varaja">
        {isLoading ? (
          filteredPokemon.map((item, index) => {
            return (
              <div className="parent" key={item.id}>
                <div className="card">
                  <div className="content-box">
                    <span className="card-title">
                      {item.name} <br></br> Number:{item.id}
                    </span>
                    <p className="card-content">
                      Type: {item.type} <br></br>
                      Base Experience: {item.experience}
                    </p>

                    <button
                      className="see-more"
                      onClick={() => {
                        navigate("/information/"+item.id);
                      }}
                    >
                      see more
                    </button>

                    {favorites.some(
                      (favorite) => favorite.name === item.name
                    ) ? (
                      <button
                        className="delete"
                        onClick={() => {
                          deletepokemons(item.name);
                        }}
                      >
                        <div className="state" id="moon">
                          Added❤️
                        </div>
                        <div className="state" id="sun">
                          Delete(fav)
                        </div>
                        <span className="lightRotation"></span>
                        <span className="lightRotation2"></span>
                        <span className="lightRotation3"></span>
                        <span className="lightRotation4"></span>
                      </button>
                    ) : (
                      <button
                        className="see-more"
                        onClick={() =>
                          handleFavorite(item.name, item.image, item.idpokedex)
                        }
                      >
                        {favorites.some(
                          ({ idpokedex }) => idpokedex === item.id
                        ) === true
                          ? "añadido"
                          : "add to:🤍"}
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
