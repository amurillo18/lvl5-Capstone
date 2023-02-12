import React,{useState, useEffect} from 'react'
import Dino from './Dino.js'
import AddDinoForm from "./AddDinoForm"
import axios from 'axios'

function DinoDirectory (addDino){
  const [dino, setDino] = useState([])

  function getDino(){
    axios.get("/dinos")
    .then(res => setDino(res.data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getDino()
    // eslint-disable-next-line
  }, [])
return(
    
<div>
    <div className='dino-container'>
      <AddDinoForm 
        addDino={addDino}
      />
    {dino.map(dino => <Dino {...dino} key={dino._id} />)}
    </div>
  </div>
)
}

export default DinoDirectory