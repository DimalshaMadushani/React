import { useState } from "react";
import Box from "./Box";

export default function BoxGrid({numBoxes = 9}){
    const [boxes , setBoxes] = useState([false,false,true,false,false,true,false,false,true])
    
    const reset = () => setBoxes([true,true,false,true,true,false,true,true,false])

    const toggleBox = (idx) => {
        setBoxes(prevBoxes => 
            prevBoxes.map((value, i) => {
            if (i === idx) {
                return !value;  // Toggle the current value
            }
            return value;  // Keep the other values unchanged
        }));
    }
    
    return(
        <div className="BoxGrid">
            {boxes.map((b,index) => {
                 return <Box isActive={b} key={index} toggleColor={() => {toggleBox(index)}}/>
            })}
            <button onClick={reset}>Reset</button>
        </div>
    )
}