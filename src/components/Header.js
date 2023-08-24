import React from 'react';
import "../styles/Header.css"
import pika from '../styles/images/Pika.png';

    function Header(){

 return (
    <div class="loader">
  <div class="cell d-0"> <img id='imagen1' src={pika}/>  </div>
  <div class="cell d-1">   <img id='imagen1' src={pika}/>    </div>
  <div class="cell d-2"> <img id='imagen1' src={pika}/> </div>

  <div class="cell d-1"> <img id='imagen1' src={pika}/> </div>
  <div class="cell d-2"> <img id='imagen1' src={pika}/> </div>
  
  
  <div class="cell d-2"> <img id='imagen1' src={pika}/> </div>
  <div class="cell d-3"> <img id='imagen1' src={pika}/> </div>
  
  
  <div class="cell d-3"> <img id='imagen1' src={pika}/> </div>
  <div class="cell d-4"> <img id='imagen1' src={pika}/> </div>
  
  
  
</div>
)	}

export default Header;