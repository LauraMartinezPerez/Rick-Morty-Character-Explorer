import React from 'react'

function CharacterCard({characterData}) {
  return (
    <li className='listClass__li'>
      <img className='listClass__img' src={characterData.image} alt={""} />
      <p>{characterData.name}</p>
      <p>{characterData.species}</p>
    </li>
  )  
}  

export default CharacterCard