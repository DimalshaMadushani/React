import {useState} from 'react';
import {v4 as uuid} from 'uuid';

function randomEmoji() {
    const emojis = ["🍕", "🍔", "🍟", "🍦", "🍩", "🍪", "🍫"]
    const idx = Math.floor(Math.random()*emojis.length) 
    return emojis[idx];
}


export default function EmojiClicker() {
    const [emojis, setEmojis] = useState([{id: uuid(), emoji: randomEmoji()}]);
    // function to execute when the button is clicked
    const addEmoji = () => {
        setEmojis(prevEmojis => {
            //returning the new array with the new emoji object added 
            return [...prevEmojis, {id: uuid(), emoji: randomEmoji()}];
        })
    }
    const deleteEmoji = (id) => {
        setEmojis(prevEmojis => {
            //filtering out the emoji object with the id that is passed
            return prevEmojis.filter( e => e.id !== id)
        })
    }
     
    const makeAllHearts = () => {
        setEmojis(prevEmojis => {
            return prevEmojis.map(e => {
                return {...e, emoji: "❤️"}
            })
        })
    }    
    return (
        <div>
            {emojis.map((e) => (
                <span onClick={() => deleteEmoji(e.id)} key={e.id} style={{fontSize:'4rem'}}>{e.emoji}</span>
            ))}
            <button onClick={addEmoji}>Add Emoji</button> 
            <button onClick={makeAllHearts}>Make them All hearts</button>   
        </div>
    )
}


// otherwise you can do it inline like this
// {/* <button onClick={() => setEmojis(prevEmojis => {
//                 return [...prevEmojis, "🍺"];
//             })}>Add Beer</button> */}
            // {/* //another button */