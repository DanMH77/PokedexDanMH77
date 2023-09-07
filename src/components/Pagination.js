// import React from "react";

// function Pagination({ totalItems, itemsPerPage, currentPage, updatePage }) {
//   const totalBtn = Math.ceil(totalItems / itemsPerPage);

//   function handleClick(newPage) {
//     if (newPage !== currentPage) {
//       updatePage(newPage);
//     }
//   }

//   return (

// <div className="acomodo"> 
// <div className="botones">



//     <div className="">
//       {Array.from({ length: totalBtn }, (_, index) => (
//           <button
//           key={index}
//           value={index + 1}
//           onClick={() => handleClick(index + 1)}
//           >
//           {index + 1}
//         </button>
//       ))}
//     </div>
//       </div>
//       </div>
//   );
// }

// export default Pagination;
import React from 'react'

function Pagination({totalPokemons,limit,updatePage}) {
function createButtons(){
    console.log("total",totalPokemons,"limit",limit);
    const totalButtons=Math.ceil(totalPokemons/limit)
    let buttons=[]
    for (let i = 0; i <totalButtons; i++) {
        buttons.push(
            <button key={i} value={i} onClick={updatePage} className='btnPagination'>
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