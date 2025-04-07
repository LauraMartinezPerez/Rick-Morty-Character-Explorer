import { Link } from 'react-router-dom'
import peinetaImage from '../images/img-peineta.webp';

function NoExistCharacter() {
  return (
    <div className="NoExistCharacter">
      <p className="NoExistCharacter__text">Este personaje no existe</p>
      <img className="NoExistCharacter__img" src={peinetaImage} alt="rick y morty peineta" />
      <Link className="backLink" to={"/"}>⬅︎ Atras</Link>
    </div>
  )
}

export default NoExistCharacter
