import { useState } from "react";

export default function ScoreKeeper2({numPlayers , target}){
    const [scores, setScores] = useState(new Array(numPlayers).fill(0))
    const [gameOver, setGameOver] = useState(false);
   
    //this function is called when the button is clicked
    //pass an updater function to setScores to update the state
    //use map to update the score of the player at the index
    //set the gameOver state to true if the score of the player is greater than or equal to the target, this is an additional feauture
    const play = (index) => {
        setScores(prevScores => 
            prevScores.map((score, idx) => {
                const newScore = idx === index ? score + 1 : score;
                if (newScore >= target) {
                  setGameOver(true);
                }
                return newScore;
              })
            );
          };

    // this is most intuitive way to update only one player's score at a time
    // const playGame = (idx) => {
    //     setScores((prevScores) => {
    //         const copy = [...prevScores];
    //         copy[idx] += 1;
    //         if (copy[idx] >= target) {
    //             setGameOver(true);
    //         }
    //         return copy;
    //     })
    // }
    //this function is called when the reset button is clicked    
    const reset = () => {
        setScores(new Array(numPlayers).fill(0))
        setGameOver(false)
    }
    //The component uses scores.map to iterate over the scores array. For each score, it renders: 
    //players number, the score, a button to increment the score, and a message if the score is greater than or equal to the target. The button is disabled if the game is over. 
    //The reset button calls the reset function when clicked.
    return (
        <div>
            {scores.map((score, idx) => (
                <div key={idx}>
                    <div>
                        <span>Player {idx + 1}: {score}</span>
                        <button onClick={() => play(idx)} disabled={gameOver}>+1</button>
                        {score >= target ? <span> - You Win!</span> : ''}
                    </div>
                </div>
            ))}
            <button onClick={reset}>Reset</button>
        </div>
    )
}

// explanation about onclick arrow function
//The idx inside the arrow function indicates that when the arrow function is executed (i.e., when the button is clicked), 
//it should call play with idx as its argument. idx is the index of the player whose score you want to increment. 
//By using an arrow function, you can pass this parameter directly to the play function.

//deal with array without dealing the ondex of the element 

//aBOVE SCORE KEEPER DEALS WITH THE INDEX OF THE ELEMENT TO ACCESS AND CHNAGE THE ELEMENTS VALUES USING MAP FUNCTION
// const numbers = [10, 20, 30, 40, 50];

// // Add a new item
// const newNumbers = [...numbers, 60];  // Adds 60 to the end of the array

// // Remove an item
// const filteredNumbers = numbers.filter(number => number !== 30);

// // Update all elements
// const updatedNumbers = numbers.map(number => number * 2);

// // Update a single particular item
// const specificallyUpdatedNumbers = numbers.map(number => {
//     if (number === 20) {
//         return number * 2;
//     }
//     return number;
// });