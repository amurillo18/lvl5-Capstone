import React from "react"


function Dossier(props) {

    const {Name, Image, Diet, Tameable, Rideable, Temperament} = props
    return(
    <div>
        <h1>Name: {Name}</h1>
        <img src={Image} alt="" width="50px" height="50px"/>
        <p> Diet: {Diet}</p>
        <p> Tameable: {Tameable ? "yes" : "no" }</p>
         <p> Rideable: {Rideable ? "yes" : "no"}</p>
        <p> Temperament: {Temperament}</p> 
    </div>
    )
}

export default Dossier