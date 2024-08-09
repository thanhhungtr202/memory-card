import { useState } from "react"
import Info from "./Info"
import "../styles/index.css"
import CardContainer from "./CardContainer"

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  if(currentScore > bestScore){
    setBestScore(currentScore);
  }

  function setScoreHanlder(){
    let newScore = currentScore + 1;
    setCurrentScore(newScore);
  }
  
  function resetScore(){
    setCurrentScore(0);
  }

  return (

    <div className='mainContainer'>
      
      <Info currentScore={currentScore} bestScore={bestScore}/>
      <CardContainer setFnc={setScoreHanlder} resetFnc={resetScore}/>
    </div>
  )
}

export default App
