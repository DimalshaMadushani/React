
import { useState } from "react";
import ShoppingListForm from "./ShoppingListForm";
import {v4 as uuid} from 'uuid';

export default function ShoppingList(){
    const [items , setItems] = useState([
        {id:uuid(), product:'Apple', quantity:8},
        {id:uuid(), product:'Orange', quantity:3},
    ])
    const addToList = (item) => {
        setItems((currItems) => {
            return [...currItems, {...item, id:uuid()}]
        })
    }
    return(
        <div>
            <h1>Shopping List</h1>
            <ul>
                {items.map(i => (
                    <li key={i.id}>
                        {i.product} - {i.quantity}
                    </li>
                ))}
            </ul>
            <ShoppingListForm addItem={addToList}/>
        </div>
    )
}