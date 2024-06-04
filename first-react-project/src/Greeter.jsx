// export default function Greeter(props){
//     return <h1>Hi There !{props.person}</h1>
// }

export default function Greeter({person="everyone", from="anonymous", age = 20}){
    const correctAge = age + 2
    return (
    <>
        <h1>Hi There!  {person}</h1>
        <h2>- from {from} , I am {correctAge}</h2>
    </>
    )}