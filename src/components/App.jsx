import "../scss/App.scss";
import Header from "./Header";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import NoCharacter from "./NoCharacter";
import { Routes, Route, useLocation, matchPath } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  //VARIABLES DE ESTADO
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterSpecies, setFilterSpecies] = useState("");

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        const parsedCharacters = data.results.map((character) => {
          return {
            image: character.image,
            name: character.name,
            species: character.species,
            origin: character.origin.name,
            status: character.status,
            episodes: character.episode.length,
            id: character.id,
          };
        });
        setCharacters(parsedCharacters);
        
      });
  }, []);

const changeName = (valueName) => {
    setFilterName(valueName);
}

const changeSpecies = (valueSpecies) => {
    setFilterSpecies(valueSpecies);
    
}
    //FILTROS
    const filteredCharacters = characters.filter((character) => {
        return character.name.toLowerCase().includes(filterName.toLowerCase());
    }).filter((character) => {
        return filterSpecies === "" ? true : filterSpecies === character.species;
    }).sort((a, b) => {
      return a.name.localeCompare(b.name); ////BONUS 8: sort ordena alfabeticamente y localeCompare maneja las mayúsculas y minúsculas según el idioma
      
  });
    
    const { pathname } = useLocation();
    const routeData = matchPath("/detail/:id", pathname);

      let idCharacterRute = undefined;
      if (routeData !== null) {
        idCharacterRute = parseInt(routeData.params.id);

      } 
      const characterSelected = filteredCharacters.find((character) => {
        
        return character.id === idCharacterRute

      });

      const resetFilters = () => {
        setFilterName("");
        setFilterSpecies("");
      }


  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={(
            <>
              <Filters onChangeName={changeName} currentName={filterName} currentSpecies={filterSpecies} onChangeSpecies={changeSpecies} onReset={resetFilters}/>
              {filteredCharacters.length === 0 ? (
                <NoCharacter filterName={filterName}/>)
                : (<CharacterList charactersData={filteredCharacters} />)
              }
            </>
          )} />
          <Route path="/detail/:id" element={<CharacterDetail character={characterSelected}/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
