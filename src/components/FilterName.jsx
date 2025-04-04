
function FilterName({ onChangeName }) {

  const handleChangeName = (ev) => {
    onChangeName(ev.target.value);
  }

  return (

    <>
    <label htmlFor="characterName">Name </label>
    <input type="text" id="characterName" onChange={handleChangeName}/>
    </>
  )
}

export default FilterName