import React from 'react'
import { Link } from 'react-router-dom'

function CharacterCard({characterData}) {
  return (
    <li className='listClass__li'>
      <Link to={`/detail/${characterData.id}`}>
        <img className='listClass__img' src={characterData.image} alt={""} />
        <p className='listClass__characterName'>{characterData.name}</p>
        <p className='listClass__characterSpecies'>{characterData.species}</p>
      </Link>
    </li>
  )  
}  

export default CharacterCard