import { useState } from "react"
import "../styles/index.css"

function Card({numberValue, clickHandler}){

    return(
        <div className="Card" onClick={clickHandler}>
            <div className="cardImg"></div>
            <p>Random Text {numberValue}</p>
        </div>
    )
}

export default Card;