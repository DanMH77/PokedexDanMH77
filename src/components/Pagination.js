
import React from 'react'
import "../styles/Pagination.css"

function Pagination({totalPokemons,limit,updatePage}) {
function createButtons(){
    const totalButtons=Math.ceil(totalPokemons/limit)
    let buttons=[]
    for (let i = 0; i <totalButtons; i++) {
        buttons.push(


          
            <button key={i} value={i} onClick={updatePage} className='btn'>
                {i+1}
            </button>
        )
    }
    return buttons
}
  return (
    <div>{createButtons()}</div>
  )
}

export default Pagination