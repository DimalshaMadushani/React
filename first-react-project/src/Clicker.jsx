// export default function Clicker() {
//     return (
//         <div>
//             <p>Click the Button</p>
//             <button onClick={handleClick}>Click</button>
//         </div>
//     )
// }

// function handleClick(){
//     console.log("Click the button")
// }

// export default function Clicker({message , buttonText}) {
//     function handleClick(){
//         alert(message)
//     }
//     return (
//         <>
//         <button onClick={handleClick}>{buttonText}</button>
//         </>
//     )
// }



export default function Clicker({message , buttonText}) {
    const handleClick = () => {alert(message)}
    return (
        <>
        <button onClick={() => alert(message)}>{buttonText}</button>
        </>
    )
}

