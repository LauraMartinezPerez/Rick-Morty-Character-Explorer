

function FilterSpecies({ onChangeSpecies, currentSpecies }) {

  const handleRadio = (ev) => {
    onChangeSpecies(ev.target.value);
  };

  return (
    <div>
      <label className="filtersClass__specieOption" htmlFor="Human">Humano</label>
      <input className="filtersClass__inputSpecie" type="radio" id="Human" name="species" value="Human" onChange={handleRadio} checked={currentSpecies === "Human"} />
      <label className="filtersClass__specieOption" htmlFor="Alien">Alien</label>
      <input className="filtersClass__inputSpecie" type="radio" id="Alien" name="species" value="Alien" onChange={handleRadio} checked={currentSpecies === "Alien"} />
    </div>
  )
}

export default FilterSpecies