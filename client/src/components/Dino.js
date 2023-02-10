import React from 'react'



export default function Dino(props){
    // console.log(props)
    const {Name, Image, Dossier:{Diet, Tameable, Rideable, Temperament}} = props
    return(
    <div>
        <h1>Name: {Name}</h1>
        <img src={Image} alt="dinoPic"/>
        <p> Diet: {Diet}</p>
        <p> Tameable: {Tameable ? "yes" : "no" }</p>
        <p> Rideable: {Rideable ? "yes" : "no"}</p>
        <p> Temperament: {Temperament}</p>
    </div>
    )
}