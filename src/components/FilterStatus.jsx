

function FilterStatus() {
  return (
    <div>
      <label>Status: </label>
      <label htmlFor="alive">Alive</label>
      <input type="radio" id="alive" name="status" value="alive"/>
      <label htmlFor="dead">Dead</label>
      <input type="radio" id="dead" name="status" value="dead"/>
      <label htmlFor="Unknown">Unknown</label>
      <input type="radio" id="Unknown" name="status" value="Unknown"/>

    </div>
  )
}

export default FilterStatus