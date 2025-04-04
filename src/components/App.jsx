import "../scss/App.scss";
import Header from "./Header";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import { useEffect, useState } from "react";

function App() {
  //VARIABLES DE ESTADO
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        const parsedCharacters = data.results.map((character) => {
          return {
            image: character.image,
            name: character.name,
            species: character.species,
            status: character.status,
            id: character.id,
          };
        });
        setCharacters(parsedCharacters);
        
      });
     console.log(characters);
  }, []);


const changeName = (valueName) => {
    setFilterName(valueName);
}

const changeStatus = (valueStatus) => {
    setFilterStatus(valueStatus);
    
}


//nuevo array que recoge el filtro por nombre
    const filteredCharacters = characters.filter((character) => {
        return character.name.toLowerCase().includes(filterName.toLowerCase());
    }).filter((character) => {
        return filterStatus === character.status;
        
    }) 
    
//nuevo array que recoge filtro de status
/* const filteredStatus = characters.filter((character) => {
    return character.status
})
 */
  return (
    <>
      <Header />
      <main>
        <Filters onChangeName={changeName} onChangeStatus={changeStatus}/>
        <CharacterList charactersData={filteredCharacters} />
      </main>
    </>
  );
}

export default App;
