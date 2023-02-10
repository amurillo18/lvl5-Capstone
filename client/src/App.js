import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Dino from './components/Dino.js'
import AddDinoForm from './components/AddDinoForm.js'

export default function App(){
  const [dino, setDino] = useState([])

  function getDino(){
    axios.get("/dinos")
    .then(res => setDino(res.data))
    .catch(err => console.log(err))
  }

  function addDino(newDino){
    // console.log(newDino)
    axios.post("/dinos", newDino)
    .then(res => {
      console.log(res.data)
      setDino(prevDino => [...prevDino, res.data])
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    axios.get("/dinos")
    getDino()
  }, [])

  return(
  <div>
    <div className='dino-container'>
      <AddDinoForm 
        addDino={addDino}
      />
      { dino.map(dino => <Dino {...dino} key={dino.name}/>)}
    </div>
  </div>
  )
}
