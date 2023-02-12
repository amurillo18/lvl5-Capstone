import React , { useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from "./components/Home"
import Dinos from "./components/dinoDirectory"
import OneDino from './components/oneDino'
import axios from 'axios'
// import Dino from './Dino.js'
// import AddDinoForm from "./AddDinoForm"


export default function App(){

  const [dino, setDino] = useState([])
  console.log(dino)

  function getDino(){
    axios.get("/dinos")
    .then(res => setDino(res.data))
    .catch(err => console.log(err))
  }
  
  function addDino(newDino){
    // console.log(newDino)
    axios.post('/dinos', newDino)
    .then(res => {
      // console.log(res.data)
      setDino(prevDino => [...prevDino, res.data])
    })
    .catch(err => console.log(err))
    getDino()
  }

  useEffect(() => {
    getDino()
  }, [])
 

  return(
    <Router>
      <nav className='header'>
        <Link to="/Home">Home</Link>
        <Link to="/dinos">Dino Directory</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dinos" element={<Dinos getDino={getDino} addDino={addDino}/>}/>
        <Route path="/dinos/dossier" element={<OneDino {...dino}/>}/>
      </Routes>
    </Router>
    
  )
}
