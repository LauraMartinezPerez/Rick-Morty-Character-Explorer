

function FilterSpecies({ onChangeSpecies, currentSpecies }) {

  const handleRadio = (ev) => {
    onChangeSpecies(ev.target.value);
  };

  return (
    <div>
      <label>Especie: </label>
      <label htmlFor="Human">Humano</label>
      <input type="radio" id="Human" name="species" value="Human" onChange={handleRadio} checked={currentSpecies === "Human"} />
      <label htmlFor="Alien">Alien</label>
      <input type="radio" id="Alien" name="species" value="Alien" onChange={handleRadio} checked={currentSpecies === "Alien"} />
    </div>
  )
}

export default FilterSpecies