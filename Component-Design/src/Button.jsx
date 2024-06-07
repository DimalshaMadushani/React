import "./Button.css"

//in this case we pass the function as a prop for the onclick event
export default function Button({clickFunc , btnName='Click Me'}){

    return <button onClick={clickFunc} className="Button">{btnName}</button>
}