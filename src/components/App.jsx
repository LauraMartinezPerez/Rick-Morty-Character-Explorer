import "../scss/App.scss";
import Header from "./Header";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import { useEffect, useState } from "react";

function App() {
  //VARIABLES DE ESTADO
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");

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
  }, []);

const changeName = (valueName) => {
    setFilterName(valueName);
}

//nuevo array que recoge el filtro por nombre
    const filteredCharacters = characters.filter((character) => {
        return character.name.toLowerCase().includes(filterName);
    })
console.log(filteredCharacters);

  return (
    <>
      <Header />
      <main>
        <Filters onChangeName={changeName}/>
        <CharacterList charactersData={filteredCharacters} />
      </main>
    </>
  );
}

export default App;
