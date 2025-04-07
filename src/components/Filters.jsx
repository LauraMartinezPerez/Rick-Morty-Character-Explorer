import FilterName from "./FilterName";
import FilterSpecies from "./FilterSpecies";

function Filters({ onChangeName, onChangeSpecies, onReset, currentName, currentSpecies }) {

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
  }

  return (
    <form className="filtersClass" onSubmit={handleFormSubmit}>
      <FilterName onChangeName={onChangeName} currentName={currentName}/>
      <FilterSpecies onChangeSpecies={onChangeSpecies} currentSpecies={currentSpecies}/>
      <button className="filtersClass__button" type="button" onClick={onReset}>Reset</button>
    </form>
  );
}

export default Filters
