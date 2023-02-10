import React, { useState } from 'react'

export default function AddDinoForm(props){
    const initInputs = {Name: "", Diet: "", Temperament: ""}
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const { name, value} = e.target 
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        // console.log(inputs)
        props.addDino(inputs)
        setInputs(inputs)
    }


    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="Name"
            value={inputs.Name}
            onChange={handleChange}
            placeholder="Name"/>

            <input
            type="text"
            name="Diet"
            value={inputs.Diet}
            onChange={handleChange}
            placeholder="Diet"/>

            <input
            type="text"
            name="Temperament"
            value={inputs.Temperament}
            onChange={handleChange}
            placeholder="Temperament"/>

            <input
            type="checkbox" 
            name="Rideable"
            value={inputs.Rideable}
            onChange={handleChange}
            placeholder="Rideable"/>
            Rideable
            

            <input
            type="checkbox"
            name="Tameable"
            value={inputs.Tameable}
            onChange={handleChange}
            placeholder="Tameable"/>
            Tameable
            

            <input
            type="image"
            src=""
            alt=""
            value={inputs.Image}
            onChange={handleChange}
            placeholder="Image"/>
            <button>Add Dino</button>
        </form>
    )
}