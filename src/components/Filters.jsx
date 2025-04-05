import FilterName from "./FilterName";
import FilterStatus from "./FilterStatus";

function Filters({ onChangeName, onChangeStatus }) {

  const handleSubmit = (ev) => {
    ev.preventDefault(); 
  };
  
  return (
    <form className="filtersClass" onSubmit={handleSubmit}>
        <FilterName onChangeName={onChangeName}/>
        <FilterStatus onChangeStatus={onChangeStatus}/>
    </form>
  );
}

export default Filters
