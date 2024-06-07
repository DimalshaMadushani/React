import {useState} from 'react';

export default function ScoreKeeper() {
    const [scores, setScores] = useState({ p1Score:0, p2Score:0 });

    const increaseP1Score = () => {
        //It creates a new object that has all the properties of scores, but with the p1Score property updated to its new value. 
        // const newScores = { ...scores , p1Score : scores.p1Score + 1 };
        // setScores(newScores);
        //it is better to use call back function to update the state since we use the previous state to calculate the new state
        setScores(prevScores => {
            return { ...prevScores, p1Score: prevScores.p1Score + 1 };
        })
    }    
    const increaseP2Score = () => {
        setScores(prevScores => {
            return { ...prevScores, p2Score: prevScores.p2Score + 1 };
        })
        
    }    
     return (
        <div>
            <p>Player 1: {scores.p1Score}</p>
            <p>Player 2: {scores.p2Score}</p>
            <button onClick={increaseP1Score}>+1 Player 1</button>
            <button onClick={increaseP2Score}>+1 Player 2</button>
        </div>
     )

}