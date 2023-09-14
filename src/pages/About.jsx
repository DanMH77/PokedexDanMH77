import React from 'react'
import "../styles/About.css"
import History from '../styles/images/DZ36V7DJVFBJRLDLQH55YDNOHA.avif'


function About() {
  return (

    <>
    <h1 className='title' >Historia Pokemon</h1>
    
     <img src={History}  className='historyImage' />

     <h2  className='historia' >La historia de Pokémon (abreviatura de Pocket Monsters) comienza en Japón, país en el que un amante de los videojuegos llamado Satoshi Tajiri, con apenas 25 años tuvo la idea de diseñar un sistema en el que varios jugadores pudieran interactuar en un mundo compartido. Era una idea ambiciosa para 1990, pero fue el germen de lo que años más tarde se convertiría en un suceso a nivel mundial. Tajiri tuvo la suerte de trabajar bajo la dirección del mítico Shigeru Miyamoto (padre de Mario Bros) en varios videojuegos y luego de años de elaborar la idea, presentó en febrero de 1996 su primer Pokémon para la consola portátil Game Boy. Dos versiones salieron al mercado, Pokémon: "Red" y "Green", y luego, se sumaría el "Blue". El juego era un RPG (role playing game), que ponía al jugador en un mundo lleno de criaturas a las que debían coleccionar y entrenar. El gran agregado y principal atractivo era la posibilidad de que los jugadores interactúen y pongan a combatir sus Pokémones. La fórmula era tan sencilla como adictiva, el público se volcó masivamente al juego y la crítica lo elogió hasta el hartazgo. Poco tardó en convertirse en un fenómeno global.</h2>
    </>
   
  )
}

export default About