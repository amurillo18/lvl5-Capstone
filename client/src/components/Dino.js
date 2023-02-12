import React from 'react'
import {Link} from "react-router-dom"



export default function Dino(props){
    // console.log(props)
    const {Name, Image} = props
    // console.log(Dossier["Diet"])
    return(
    <div>
        <h1>Name: {Name}</h1>
        <img src={Image} alt="dinoPic" width="50px" height="50px"/>
        <Link to="/dinos/dossier">More Information</Link>

        
    </div>
    )
}