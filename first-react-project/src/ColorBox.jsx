import { useState } from "react"
import './ColorBox.css'
function randomElemnt(arr) {
    const idx = Math.floor(Math.random()*arr.length) 
    return arr[idx];
}
export default function ColorBox({colors}) {
    const [color , setColor] = useState(randomElemnt(colors))
    const changeColor = () => {
        const colorCode = randomElemnt(colors)
        setColor(colorCode)
    }
    return (
        <div 
        style={{backgroundColor:color}}
        className="ColorBox"
        onClick={changeColor}
        ></div>
    )
}