import {useState} from "react"

export default function Counter() {
    const [num , setNum]  = useState(5)
    const changeNum = () => {setNum(num+1)}
    return (
        <div>
            <p>The count is {num}</p>
            <button onClick={changeNum}>Increment</button>
        </div>
    )
}

// useState is a hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value. This is similar to this.setState in a class component, except this function does not merge the old and new state together.