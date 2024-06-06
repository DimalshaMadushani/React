import { useState } from "react";

export default function ToggleCounter() {
    const [isHappy , setIsHappy] = useState(true);
    const [count , setCount] = useState(0);

    const toggleIsHappy = () => setIsHappy(!isHappy);
    const changeCount = () => setCount(count + 1)
    return (
        <>
        <p className="Toggler" onClick={toggleIsHappy}> 
            {isHappy ? ' 😊' : ' 🥺'}
        </p>
        <p onClick={changeCount}>
            {count}
        </p>
        <button onClick={changeCount}>+</button>
        </>
    )}