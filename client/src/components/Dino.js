import React from 'react'

export default function Dino(props){
    // console.log(props)
    const {Name, Image, Diet, Tameable, Rideable, Temperament} = props
    // console.log(Dossier["Diet"])
    return(
    <div>
        <h1>Name: {Name}</h1>
        <img src={Image} alt="dinoPic" width="50px" height="50px"/>
        <p> Diet: {Diet}</p>
        <p> Tameable: {Tameable ? "yes" : "no" }</p>
         <p> Rideable: {Rideable ? "yes" : "no"}</p>
        <p> Temperament: {Temperament}</p> 
    </div>
    )
}