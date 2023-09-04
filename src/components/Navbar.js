import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'
   

function Navbar(){

 return (
<nav id='header'>
    <ul>
        <li id='outer'>
            <Link to="/" className='Home' ><button className="button">Home</button></Link> 
        </li>
        <li>  
            <Link to="/about" className='About'><button className="button2"> About</button></Link>
        </li>
        <li>
        <Link to="/pokedex" className='Poke' ><button className="button3">Pokedex</button></Link>
        </li>
    </ul>
</nav>
)	}

export default Navbar