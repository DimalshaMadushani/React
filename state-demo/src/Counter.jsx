import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const addOne = () => {
        setCount(count + 1);
    };
    
    // by using the currentCount parameter, we can ensure that the state is updated correctly
    // this is called passing an updater function to the setter function
    //this updater function is a callback function that receives the current state as a parameter
    //this matters only when we use th e previous state to calculate the new state
    const addThree = () => {
        setCount ((currentCount) => currentCount + 1);
        setCount ((currentCount) => currentCount + 1);
        setCount ((currentCount) => currentCount + 1);
    };    
    
    return (
        <div>
        <h1>Counter</h1>
        <p>Count: {count}</p>
        <button onClick={addOne}>+1</button>
        <button onClick={addThree}>+3</button>
        </div>
    );
}