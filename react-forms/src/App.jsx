import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import UsernameForm from './UsernameForm'
import SignUpForm from '../SignUpForm'
import BetterSignUpForm from './BetterSignupForm'
import ShoppingListForm from './ShoppingListForm'
import ShoppingList from './ShoppingList'
import FormDemo from './FormDemo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <UsernameForm /> */}
      {/* <SignUpForm /> */}
      {/* <BetterSignUpForm /> */}
      {/* <BetterSignUpForm/> */}
      {/* <ShoppingListForm/> */}
      {/* <ShoppingList/> */}
      <FormDemo />
    </>
  )
}

export default App
