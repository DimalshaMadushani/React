import { useState } from "react";

export default function BetterSignUpForm(){

    const [formData, setFormData] = useState({firstName: '', lastName: ''})
    
    // this function will update the state of the form data
    const handleChange = (evt) => {
        const changeField = evt.target.name;// The name attribute of the form element
        const newValue = evt.target.value; // The new value from the form element

        setFormData((currData) => {
            // currData[changeField] = newValue;
            // return {...currData};
            // this is called computed property names syntax
            return {...currData, [changeField]: newValue};
        })
    }
    // this function will handle the form submission
    const handleSubmit = () => {
        console.log(formData);
    }

    return (
        <div>
            <label htmlFor="firstname">First name</label>
            <input 
                type="text" 
                placeholder="first name" 
                value={formData.firstName} 
                onChange={handleChange}
                name="firstName"
                id='firstname'
            />
            <label htmlFor="lastname">Last Name</label>
            <input 
                type="text" 
                placeholder="last name" 
                value={formData.lastName} 
                onChange={handleChange}
                name="lastName"
                id='lastname'
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )}