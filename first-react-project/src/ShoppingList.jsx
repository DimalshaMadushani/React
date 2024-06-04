import ListPicker from "./ListPicker";
import ShoppingListItem from "./ShoppingListItem";
export default function ShoppingList({items}){
    return (
        <ul>
            {items.map((i) => (
            <ShoppingListItem 
                key={i.id} 
                item = {i.item} 
                quantity = {i.quantity} 
                completed = {i.completed} 
            />
        ))}
        </ul>
    )

}

{/* <ShoppingListItem key={i.id} {...i} /> or use the spread operator */}