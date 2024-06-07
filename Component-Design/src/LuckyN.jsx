import { useState } from "react";
import Dice from "./Dice";
import Button from "./Button";

// import { getRolls , sum } from "./utils";
import { getRolls  } from "./utils";

export default function LuckyN({title , numDice=2, winCheck}) {
    //piece of state and the function to set the state
    const [dice, setDice] = useState(getRolls(numDice));
    // const isWinner = sum(dice) === goal;, this version can be used when the goal is passed as a prop
    const isWinner = winCheck(dice)
    //this function executed when roll again buuton is clicked , since the next rolls dont depent on the prev rolls, we simply udate the dice state using getRolls
    const playGame = () => {setDice(getRolls(numDice))}

    return (
        <main className="LuckyN">
            <h1>
                {/* Lucky{goal} {isWinner && "You Win!"} */}
                {title} {isWinner && "You Win!"}
            </h1>
            <Dice dice={dice}/>
            {/* <button onClick={playGame}>Roll Again</button> */}
            <Button clickFunc={playGame} btnName='Play'/>
        </main>
    )
}