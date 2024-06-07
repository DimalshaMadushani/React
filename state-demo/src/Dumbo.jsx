
import { useState } from "react"


function generateGameBoard() {
    console.log("making the initial game board");
    return Array(500);
}

export default function Dumbo() {
    const [board, setBoard] = useState(generateGameBoard);
    // when we pass the initial state as a function is called every time the component is rendered,so it is a waste. 
    //everytime when we click the button we can see that the console.log is printed but the return statement is simply ignored
    // so we simply pass the function name without the parenthesis , it will called only onetime and not everytime the button is clicked , it sets the initial state by executing the function only once
    // const [board, setBoard] = useState(generateGameBoard());
    return (
        <button onClick={() => setBoard("Hello!")}>Click me to change the state</button>
    )
}

