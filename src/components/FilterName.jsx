
function FilterName({ onChangeName, currentName }) {

  const handleChangeName = (ev) => {
    onChangeName(ev.target.value);
  };

  return (

    <div>
    <label htmlFor="characterName">Name </label>
    <input type="text" id="characterName" value={currentName} onChange={handleChangeName}/>
    </div>
  )
}

export default FilterName