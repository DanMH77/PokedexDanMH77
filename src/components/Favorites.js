import React, {useEffect,useState} from 'react';
import { getPokemonfavorite } from './Api';
import "../styles/Favorites.css"
import { useNavigate } from 'react-router-dom';




    function Favorites(){

        const [favoritesPoke, setFavoritesPoke] = useState([]);


  const navigate = useNavigate();

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
  },[])


 return (
<>
<h1 className='Title' >Favorites Pokemon</h1>
<div className='dadContainer' >
{favoritesPoke.map((item, index) =>  {
return (
<div  className='mother' key={index}  >
<div className="parent4">
  <div className="card4">
      <div className="content-box4">
          <span className="card-title4">Nombre: <strong>{item.name}</strong></span>
          <p className="card-content4">
             Este pokemon fue agregado a favoritos de {item.id}° 
          </p>
          <span className="see-more4"  onClick={()=> {
            navigate("/information")
          }}  >See More</span>
      </div>
      <div className="date-box4">
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