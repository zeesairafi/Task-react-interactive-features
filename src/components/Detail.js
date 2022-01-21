import React from 'react'

function Detail({cookie}) {
    return (
        <div>
           <h1>{cookie.name}</h1> 
           <img src={cookie.image}/>
           <p>{cookie.price}</p>
           <p>{cookie.description}</p>
        </div>
    )
}

export default Detail;




