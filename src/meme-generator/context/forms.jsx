import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            comment: "",
            isFriendly: true,
            employment: "",
            faveColor: "",
        }
    )
    
    console.log(formData)
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        // submitToApi(formData)
        console.log(formData)
    }
    
    return (
        <form onSubmit={handleSubmit}>

            {/* regular inputs */}
            <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
            />
            <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />

            {/* textarea inputs */}
            <textarea 
                placeholder="Comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
            />

            {/* checkbox inputs */}
            <input 
                name="isFriendly"
                type="checkbox" 
                id="isFriendly" 
                checked={formData.isFriendly}
                onChange={handleChange}
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br />
            <br />
            
            {/* radio inputs */}
            <fieldset>
                <legend>Current employment status</legend>
                
                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
                
            </fieldset>

            {/* select inputs */}
            <br />
            
            <label htmlFor="faveColor">What is your favorite color?</label>
            <br />
            <select 
                id="faveColor"
                value={formData.favColor}
                onChange={handleChange}
                name="faveColor"
            >
                <option disabled value="">-- Choose --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>

            <br />
            <br />
            {/* for normal since meron nama na onSubmit sa taas */}
            <button>Submit</button>
            {/* for defaultingf naman na button like this */}
            <button type="button">Submit</button>
            {/* or */}
            <input type="submit" />
        </form>
    )
}
