import { useState } from "react"
import "../styles/index.css"
import Card from "./Card";

function CardContainer(){
    let a = [1, 2, 3, 4, 5, 6, 7, 9]
    function clickFnc(){
        alert("Hello");
    }
    return(
        <div className="cardContainer">
            {a.map((number) => {
                return <Card numberValue={number} clickHandler={clickFnc} key={number}/>
            })}
        </div>
    )
}

export default CardContainer;