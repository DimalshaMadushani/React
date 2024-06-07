//COMMON PATTERNS FOR UPDATING ARRAYS IN  STATE

const shoppingCart = [
    { id: 1, product: "HDMI cable", price: 0.5},
    { id: 2, product: "Monitor", price: 100},
    { id: 3, product: "Keyboard", price: 25},
]


//Add a new item to the shopping cart
[...shoppingCart, {id: 4, product: "Mouse", price: 10}];

//Remove an item from the shopping cart
shoppingCart.filter(item => item.id !== 2);

//updating all elements in the shopping cart
shoppingCart.map(item => {
    return {...item,product: item.product.toLowercase()} //changing the product name to lowercase
})

//updating a single particular item in the shopping cart
shoppingCart.map(item => {
    if(item.id === 1) {
        return {...item,price: item.price * 2} //doubling the price of the item with id 1
    }
    return item;
})