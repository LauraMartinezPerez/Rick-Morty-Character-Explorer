
function FilterName({ onChangeName, currentName }) {

  const handleChangeName = (ev) => {
    onChangeName(ev.target.value);
  };

  return (

    <div>
    <label className="filtersClass__name" htmlFor="characterName">Nombre </label>
    <input className="filtersClass__inputName" type="text"   id="characterName" placeholder="Escribe el nombre" value={currentName} onChange={handleChangeName}/>
    </div>
  )
}

export default FilterName