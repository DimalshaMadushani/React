import {useState} from 'react'

export default function SignUpForm(){
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const updateFirstName = (e) => {
        setFirstName(e.target.value)
    }
    const updateLastName = (e) => {
        setLastName(e.target.value)
    }

    const handleSubmit = () => {
        console.log(firstName,lastName)
    }
    return (
        <div>
            <label htmlFor="firstname">First name</label>
            <input 
                type="text" 
                placeholder="first name" 
                value={firstName} 
                onChange={updateFirstName}
                id='firstname'
            />
            <label htmlFor="lastname">Last Name</label>
            <input 
                type="text" 
                placeholder="last name" 
                value={lastName} 
                onChange={updateLastName}
                id='lastname'
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}