import { useState } from "react"
import { useEffect } from "react";
import "../styles/index.css"
import Card from "./Card";

function CardContainer({setFnc, resetFnc}){
    const [a, setA] = useState([1, 2, 3, 4, 5, 6, 7, 9]);
    const [characters, setCharacters] = useState([]);
    const [selected, setselected] = useState([]);

    useEffect(() => {
        let tempArr = characters.sort(() => Math.random() - 0.5)
        setCharacters(tempArr);
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
            {characters.map((pokemon, index) => {
                return <Card
                key={index}
                numberValue={pokemon.id}
                pokemonName={pokemon.name}
                pokemonImg={pokemon.sprites.front_default}
                clickHandler={clickFnc} 
                
                />
            })}
        </div>
    )
}

export default CardContainer;