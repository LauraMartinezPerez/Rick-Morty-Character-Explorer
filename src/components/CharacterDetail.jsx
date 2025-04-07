import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa';
import NoExistCharacter from './NoExistCharacter';


function CharacterDetail({character}) {
  if (!character) {
  return (  
    <>
      <NoExistCharacter />
    </>)

}
    return (
      <div className='characterDetail'>
        <section className='backLink'>
            <Link className="backLinkBtn" to={"/"}>⬅︎ Atras</Link>
        </section>
        <div className='characterDetail__container'>
          <section>
            <img className="characterDetail__img" src={character.image} alt="" />
          </section>
          <section>
            <h3 className="characterDetail__name">{character.name}</h3>
            <p className="characterDetail__data"> Status: {character.status === "Dead" ? "Muerto 💀" : character.status }</p>
            <p className="characterDetail__data">Especie: {character.species}</p>
            <p className="characterDetail__data">Origen: {character.origin}</p>
            <p className="characterDetail__data">Episodios: {character.episodes}</p>
          </section>
        </div>
      </div>
    )
  }


  export default CharacterDetail 

