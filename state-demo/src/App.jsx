import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Counter from './Counter'
import Dumbo from './Dumbo'
import ScoreKeeper from './ScoreKeeper'
import EmojiClicker from './EmojiClicker'
import ScoreKeeper2 from './ScoreKeeper2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <h1>State Demo</h1> */}
    {/* <Counter /> */}
    {/* <Dumbo /> */}
    {/* <ScoreKeeper /> */}
    {/* <EmojiClicker /> */}
    <ScoreKeeper2 numPlayers={5} target={5}/>
    </>
  )
}

export default App
