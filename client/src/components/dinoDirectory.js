import React,{useState, useEffect} from 'react'
import Dino from './Dino.js'
import AddDinoForm from "./AddDinoForm"
import axios from 'axios'

function DinoDirectory (){
  const [dino, setDino] = useState([])
  //console.log(dino)

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
    
<div>
    <div className='dino-container'>
      <AddDinoForm addDino={addDino}
      />
    {dino.map(dino => <Dino {...dino} key={dino._id} />)}
    </div>
  </div>
)
}

export default DinoDirectory