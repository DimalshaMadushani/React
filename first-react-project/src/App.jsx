
import './App.css'
import Cat from "./cat.jsx"
import Greeter from "./Greeter"
import ListPicker from "./ListPicker"
import DoubleDice from "./DoubleDice"
import Heading from './Heading.jsx'
import ColorList from './ColorList.jsx'
import Slot from './Slot.jsx'
function App() {
  return (
    <>
      {/* <Cat/>
      <Greeter person="Dimalsha"  />
      <Greeter person="Pasan" from="Sara" age={28}/>
      <ListPicker values={[2, 3, 5]}/> */}
      {/* <DoubleDice/>
      <Heading color='pink' text="Welcome!"/>
      <ColorList colors = {['pink', 'blue', 'green']}/> */}
      <Slot val1 = '🍎' val2 = '🌞' val3 = '🌞'/>
      <Slot val1 = '🍎' val2 = '🍎' val3 = '🍎'/>
    </>
  )
}

export default App
