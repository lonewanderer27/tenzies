import './style.css'
import Die from './components/Die'
import Button from './components/Button'
import { newDice } from './interfaces'
import { nanoid } from 'nanoid'
import { useState, useEffect } from 'react'
import Confetti from "react-confetti"
import BestAttempts from './components/BestAttempts'

function App() {
  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)
  const [attempts, setAttempts] = useState(0)
  const [bestAttempts, setBestAttempts] = useState(Number(localStorage.getItem("bestAttempts")) || 0)

  useEffect(() => {
    console.log("Dice stated changed.")
    const result = dice.every(die => {
      if (die.isHeld == true){
        if (die.value == dice[0].value) {
          return true;
        }
      }
    })

    if (result) {
      if (attempts < bestAttempts || bestAttempts == 0) {
        setBestAttempts(attempts)
        localStorage.setItem("bestAttempts", attempts.toString())
      }
      setTenzies(true)
      result && console.log("You won!")
    }
  }, [dice])

  function generateNewDie():newDice {
    return {
      value: Math.ceil( Math.random() * 6 ),
      isHeld: false,
      id: nanoid()
    }
  }

  function allNewDice(): newDice[] {
    let newDice: newDice[] = []

    for (let i: number = 0; i < 10; i++) {
      newDice.push(generateNewDie())
    }

    return newDice
  }

  function resetGame(): void {
    setTenzies(false)
    setDice(allNewDice())
    setAttempts(0)
  }

  function rollDice(): void {
    setDice(prevDice => prevDice.map(die => {
      return die.isHeld == true ? 
                {...die}
                  :
                generateNewDie()
    }))
    setAttempts(prevAttemps => prevAttemps+=1)
  }

  function holdDice(id: string): void {
    console.log(`Clicked Dice ID: ${id}`)
    setDice(prevDice => prevDice.map(die => {
        return die.id == id ? 
                {...die, isHeld: !die.isHeld} 
                  : 
                {...die}
      })
    )
  }

  const diceElements = dice.map(die => (
    <Die 
      key={die.id} 
      id={die.id}
      value={die.value}
      isHeld={die.isHeld} 
      handleClick={holdDice}
    />
  ))

  console.log(`Current Attempts: ${attempts}\nBest Attempts: ${bestAttempts}`)
  console.log(`Best Attempts from LocalStorage: ${localStorage.getItem("bestAttempts")}`)

  return (
    <div className="App">
      {tenzies && <Confetti />}
      <main>
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <BestAttempts attempt={bestAttempts}/>
        <div className="die--container">
          {diceElements}
        </div>
        <Button handleClick={tenzies ? resetGame : rollDice}>
          {tenzies ? "New Game": "Roll"}
        </Button>
        <p>Attempts: {attempts}</p>
      </main>
    </div>
  )
}

export default App
