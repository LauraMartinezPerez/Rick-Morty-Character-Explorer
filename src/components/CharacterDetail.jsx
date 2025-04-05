import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa';


function CharacterDetail({character}) {
  if (!character) {
  return (  
    <>
      <p>Este personaje no existe</p>
      <Link to={"/"}>⬅︎ Atras</Link>
    </>)


}
    return (
        <section className="characterDetail">
            <img className="characterDetail__img" src={character.image} alt="" />
            <h3>{character.name}</h3>
            <p>{character.status === "Dead" ? "Muerto 💀" : character.status }</p>
            <p>{character.species}</p>
            <p>{character.origin}</p>
            <p>{character.episodes}</p>
            <Link to={"/"}>⬅︎ Atras</Link>
      </section>
    )
  }


  export default CharacterDetail 

