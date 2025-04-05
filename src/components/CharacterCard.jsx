import React from 'react'
import { Link } from 'react-router-dom'

function CharacterCard({characterData}) {
  return (
    <li className='listClass__li'>
      <Link to={`/detail/${characterData.id}`}>
        <img className='listClass__img' src={characterData.image} alt={""} />
        <p>{characterData.name}</p>
        <p>{characterData.species}</p>
      </Link>
    </li>
  )  
}  

export default CharacterCard