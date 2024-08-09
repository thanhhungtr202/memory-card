import { useState } from "react"
import "../styles/index.css"

function Info(){
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    return(
        <div className="info">
            <div className="title">
                <h1>Amphibia Memory Game</h1>
                <h2>Get points by clicking on an image but don't click on any more than once!</h2>
            </div>
            <div className="score">
                <h3>Score: {currentScore}</h3>
                <h3>Best Score: {bestScore}</h3>
            </div>
        </div>
    )
}

export default Info;