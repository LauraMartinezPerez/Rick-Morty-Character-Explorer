import FilterName from "./FilterName";
import FilterStatus from "./FilterStatus";

function Filters({ onChangeName }) {
  return (
    <form className="filtersClass">
        <FilterName onChangeName={onChangeName}/>
        <FilterStatus />
      

    </form>
  )
}

export default Filters
