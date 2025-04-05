import { Link } from 'react-router-dom'

function CharacterDetail({character}) {

    return (
        <section className="characterDetail">
            <img className="characterDetail__img" src={character.image} alt="" />
            <h3>{character.name}</h3>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>{character.origin}</p>
            <p>{character.episodes}</p>
            <Link to={"/"}>⬅︎ Atras</Link>
            <FontAwesomeIcon icon="fa-sharp-duotone fa-solid fa-arrow-left" />
          
      </section>
    )
  }
  
  export default CharacterDetail
