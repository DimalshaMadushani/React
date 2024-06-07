import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Dice from './Dice'
import LuckyN from './LuckyN'
import {sum} from "./utils"

import Box from './Box'
import BoxGrid from './BoxGrid'

//These functions can be passed as props depending on the type of the game
function lessThan4(dice){
  return sum(dice) < 4;
}

function allSameRoll(dice){
  return dice.every(v => v === dice[0])
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Dice dice = {[3,6,1]}/>
      <Dice dice = {[4,2,5]} color='green'/> */}
      {/* <LuckyN numDice={3} goal={10} /> */}
      {/* <LuckyN winCheck={lessThan4}/> */}
      {/* <LuckyN title='Roll Same Value Game' winCheck={allSameRoll} numDice={4}/> */}
      {/* <Box/> */}
      <BoxGrid/>
     

    </>
  )
}

export default App
