// import { useState } from 'react'
import './Box.css'

// export default function Box() {

    // const [isActive , setIsActive] = useState(false);
    // const toggleIsActive = () => setIsActive(!isActive);

//     return (
//         <div 
//             className="Box" 
//             onClick={toggleIsActive} 
//             style={{backgroundColor: isActive ? 'red':'yellow'
//         }} >
        
//         </div>
//     )
// }

//since we want to chnage the state of all the boxes by a reset button , we have to move the state up, 
//means box grid

export default function Box({isActive, toggleColor}){
    return(
        <div 
        onClick={toggleColor}
        className='Box'
        style={{backgroundColor: isActive ? 'red':'yellow'}}>
        </div>
    )
}