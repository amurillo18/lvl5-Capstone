import React, {useState, useEffect} from 'react'
import Dossier from './Dossier'
import axios from 'axios'

function OneDino (props){
  const [dino, setDino] = useState([])

  function getOneDino(dinoId){
    axios.get(`/dinos/${dinoId}`)
    .then(res =>{ setDino(prevDino=> prevDino.filter(dino => dino._id === dinoId))})
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getOneDino()
    // eslint-disable-next-line
  }, [])
return(
    
<div>
    <div className='dino-dossier-container'>
    <Dossier {...dino} key={dino._id}
    />
    </div>
  </div>
)
}

export default OneDino