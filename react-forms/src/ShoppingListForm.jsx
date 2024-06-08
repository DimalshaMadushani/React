import { useState } from "react";

import { useForm } from "react-hook-form";

export default function ShoppingListForm({addItem}){
    const [formData , setFormData] = useState({ product:'', quantity:0});

    const handleChange = (evt) => {

        const changeField = evt.target.name;
        const newValue = evt.target.value;

        setFormData(currData =>{
            return {...currData, [changeField]:newValue}
        })
    }

    //since we are using forms we have use onSubmit instead of onClick to handle the form submission
    //this is an intermediate function that is called when the form is submitted
    //it prevents the default behavior of the form submission
    //it calls the addItem function that was passed as a prop with the formData
    const handleSubmit = (evt) => {
        evt.preventDefault()
        addItem(formData)
        setFormData({ product:'', quantity:0})
    }
    return (
        
        <form action="" onSubmit={handleSubmit}>
            <h1>Product is : {formData.product} {formData.quantity}</h1>
            <label htmlFor="product">Product Name</label>
            <input 
                type="text" 
                name="product" 
                id="product" 
                placeholder="product name" 
                value={formData.product}
                onChange={handleChange}
            />
            <label htmlFor="quantity">Quantity</label>
            <input 
                type="number" 
                name="quantity" 
                id="quantity" 
                placeholder= '1'
                value={formData.quantity}
                onChange={handleChange}
            />
            <button type='submit'>Add Item</button>
        </form>
    )
}

//we set the type of the button to submit so that the form is submitted when the button is clicked