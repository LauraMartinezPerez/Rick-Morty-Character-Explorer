

function FilterStatus({ onChangeStatus }) {

  const handleRadio = (ev) => {
    onChangeStatus(ev.target.value);
  };

  return (
    <div>
      <label>Status: </label>
      <label htmlFor="alive">Alive</label>
      <input type="radio" id="alive" name="status" value="Alive" onChange={handleRadio}/>
      <label htmlFor="dead">Dead</label>
      <input type="radio" id="dead" name="status" value="Dead" onChange={handleRadio}/>
      <label htmlFor="Unknown">Unknown</label>
      <input type="radio" id="Unknown" name="status" value="Unknown" onChange={handleRadio}/>

    </div>
  )
}

export default FilterStatus