import React, {useState, useEffect } from 'react';
import "../styles/SearchBar.css"

function PageTitleChanger(){
const [title, setTitle] = useState ('');
const [inputValue, setInputValue] =useState ('');


const handleChange =(event)=>{
setInputValue(event.target.value);
}


const handleSummit =(event)=>{
    event.preventDefault();
    if(inputValue.trim()!== ''){
        setTitle(inputValue);
        setInputValue('');   
    }
}

useEffect(()=>{
    document.title = title
    console.log();
}, [title]);

 return (




    
<div>
<h1>{title}</h1>
<form onSubmit={handleSummit}>
<input type='text'
value={inputValue}
onChange={handleChange}
placeholder='Buscar un Pokemon'/>
<button>Search🔎</button>
</form>
 </div>
)	}

export default PageTitleChanger;