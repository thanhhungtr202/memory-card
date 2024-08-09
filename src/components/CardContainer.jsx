import { useState } from "react"
import { useEffect } from "react";
import "../styles/index.css"
import Card from "./Card";

function CardContainer({setFnc, resetFnc}){
    const [a, setA] = useState([1, 2, 3, 4, 5, 6, 7, 9]);
    const [characters, setCharacters] = useState();
    const [selected, setselected] = useState([]);

    useEffect(() => {
        let tempArr = a.sort(() => Math.random() - 0.5)
        setA(tempArr);
        console.log(a);
    }, [selected])

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=14&offset=0")
          .then((res) => res.json())
          .then((data) => {
            const fetches = data.results.map((result) =>
              fetch(result.url).then((res) => res.json())
            );
            Promise.all(fetches).then((results) => setCharacters(results));
          });
      }, []);

    console.log(characters);

    function clickFnc(number){
        return function() {
            if(selected.includes(number)){
                alert("you lose");
                resetFnc();
                setselected([]);
            }
            else{
                let newSelected = [...selected, number];
                setFnc();
                setselected(newSelected);
            }
            
        };
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