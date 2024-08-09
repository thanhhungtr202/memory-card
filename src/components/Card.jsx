import { useState } from "react"
import "../styles/index.css"

function Card({numberValue, pokemonName, pokemonImg, clickHandler}){

    return(
        <div className="Card" onClick={clickHandler(numberValue)}>
            <img src={pokemonImg} className="cardImg"/>
            <p>{pokemonName}</p>
        </div>
    )
}

export default Card;