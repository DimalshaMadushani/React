
import './App.css'
import Cat from "./cat.jsx"
import Greeter from "./Greeter"
import ListPicker from "./ListPicker"
import DoubleDice from "./DoubleDice"
import Heading from './Heading.jsx'
import ColorList from './ColorList.jsx'
import Slot from './Slot.jsx'
import ShoppingList from './ShoppingList.jsx'
import PropertyList from './PropertyList.jsx'
import Clicker from './Clicker.jsx'
import Form from './Form.jsx'

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];
const data = [
  { id: 1, item: "Apple", quantity: 3 , completed: false},
  { id: 2, item: "Banana", quantity: 2 , completed: true},
  { id: 3,  item: "Cherry", quantity: 5, completed: false },
  { id: 4, item: "Orange", quantity: 4, completed: true }
]
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
      {/* <Slot val1 = '🍎' val2 = '🌞' val3 = '🌞'/>
      <Slot val1 = '🍎' val2 = '🍎' val3 = '🍎'/> */}


      {/* <ShoppingList items={data}/> */}
      {/* <PropertyList properties={properties}/> */}
      {/* <Clicker/> */}
      {/* <Form/> */}
      <Clicker message='Please stop' buttonText='Click me'/>
    </>
  )
}

export default App
