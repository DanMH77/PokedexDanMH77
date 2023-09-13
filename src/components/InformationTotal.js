import React from 'react';
import { useNavigate } from 'react-router-dom';



function InformationTotal(){
    
        const navigate = useNavigate();

 return (
<div>
<button  onClick={() => {
    navigate("/pokedex")
}} >volver</button>
<h1>holaaaaaa</h1>
 </div>
)	}

export default InformationTotal;