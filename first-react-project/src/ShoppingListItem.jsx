import propTypes from 'prop-types'

export default function ShoppingListItem({item, quantity, completed}){
    const styles = {
        color: completed ? 'blue': 'red',
        textDecoration: completed ? "line-through" : 'none'
    };
    return (
        <li style={styles}>
            {item} - {quantity}
        </li>
    )
}

ShoppingListItem.propTypes = {
    item: propTypes.string,
    quantity : propTypes.number,
    completed : propTypes.bool
}