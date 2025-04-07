import sorpresaImage from '../images/sorprendidos.webp';
import { Link } from 'react-router-dom';

function NoCharacter({filterName}) {
  return (
    <div className="NoCharacter">
        <p className="NoCharacter__text">No hay ningún personaje que coincida con el nombre "{filterName}"</p>
        <img className="NoCharacter__img"src={sorpresaImage} alt="rick y morty sorprendidos" />    
    </div>
  )
}

export default NoCharacter