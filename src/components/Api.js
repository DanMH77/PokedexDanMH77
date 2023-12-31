export async function getPokemonList (url) {
    var pokemonData = [];
    var result = {}
    try {
        // Consumir el api con la url recibida
        const response = await fetch(url);
        // vamos a esperar la respuesta y formatearla a json
        const data = await response.json();
        if (data.results && data.results.length){
            // iterar cata pokemon
            for (const pokemon of data.results){
                const url = pokemon.url;
                const detailPokemon = await getPokemonDetailByUrl(url);
                //push al arrelo de pokemons
                pokemonData.push(detailPokemon);
            }
        }
        result ={count:data.count,
            next:data.next,
            previous: data.previous,
            array: pokemonData};

    } catch (error) {
        console.error (" Error capturando la Pokemon data", error);
        return null;
    }
    return result;
 }

 async function getPokemonDetailByUrl(url) {
    try {
        // obtener el detalle de cada pokemon
        const response = await fetch(url);
        const data = await response.json();
        const id = data.id;
        return {
            id,
            name:data.name,
            image:data.sprites.other["official-artwork"]["front_default"],
            type:data.types.map((item) => item.type.name),
            experience:data.base_experience
        }
    } catch (error) {
      console.error (" Error capturando el detalle", error);
      throw error;  
    }
 }


 export async function addPokemon(name,image,id){
    ///fovorites-poke
    const response= await fetch(`https://64ee628c219b3e2873c32c80.mockapi.io/favorites/favorite-pokemon`,
    {
        method:"POST", //envia dato
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({name:name, image:image, id:id })
    }).then((res)=>{
        if (res.ok){
            console.log('datos guardados');
        }
        else {
            throw `Error`;
        }
    });
}





export async function getPokemonfavorite() {

    
    const response= await fetch(`https://64ee628c219b3e2873c32c80.mockapi.io/favorites/favorite-pokemon`)
    const data = await response.json();

    //pokemonFavoritesData.push(data);
   
    return data;

}


// async function deletePokemonFavorite(id) {
//     try {
//      const getPokemones = await getPokemonfavorite();  
//     let deleteId = "";
//     const verificar = getPokemones.some(({name,id}) =>{
//         if (name == id) {
//             deleteId = id;
//         }
//     })
     

//      return verificar;


//      }catch (error) {
//       console.error (" Error borrando al Pokemon", error);
//       throw error;  
//     }
//  }



export async function deletePokemonesFavoritos(nameP) {
    try {
        const getPokemones = await getPokemonfavorite();
        let deleteId = '';
        console.log(nameP);

        const verificar = getPokemones.some(({name,id}) =>{
            console.log("Delete: " , name , id)
            if ( name == nameP) {
                deleteId = id;
            }
        }) 
        
        console.log(verificar);

        return fetch(`https://64ee628c219b3e2873c32c80.mockapi.io/favorites/favorite-pokemon/${deleteId}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        ).then((res) => {
          if (res.ok) {
            console.log("Datos eliminados en mockupApi");
          } else {
            throw Error;
          }
        });

        // return pokemonfavoritosData;

    } catch (error) { //Se ejecuta si hubo algun error
        console.error("Hubo un error al llamar al api")
        return []
    }

}

