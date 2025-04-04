import FilterName from "./FilterName";
import FilterStatus from "./FilterStatus";

function Filters({ onChangeName, onChangeStatus }) {
  return (
    <form className="filtersClass">
        <FilterName onChangeName={onChangeName}/>
        <FilterStatus onChangeStatus={onChangeStatus}/>
      

    </form>
  )
}

export default Filters
