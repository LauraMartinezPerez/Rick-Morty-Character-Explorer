
function FilterName({ onChangeName }) {

  const handleChangeName = (ev) => {
    onChangeName(ev.target.value);
  };

  return (

    <div>
    <label htmlFor="characterName">Name </label>
    <input type="text" id="characterName" onChange={handleChangeName}/>
    </div>
  )
}

export default FilterName