import "../scss/App.scss";
import Header from "./Header";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import { Routes, Route, useLocation, matchPath } from "react-router-dom";
import { /* use, */ useEffect, useState } from "react";

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
            origin: character.origin.name,
            status: character.status,
            episodes: character.episode.length,
            id: character.id,
          };
        });
        setCharacters(parsedCharacters);
        
      });
  }, []);
  console.log(characters);


const changeName = (valueName) => {
    setFilterName(valueName);
}

const changeStatus = (valueStatus) => {
    setFilterStatus(valueStatus);
    
}
    //FILTROS
    const filteredCharacters = characters.filter((character) => {
        return character.name.toLowerCase().includes(filterName.toLowerCase());
    }).filter((character) => {
      /*   if (filterStatus === ""){
            return true;
        } else {
            return filterStatus === character.status;} */
        return filterStatus === "" ? true : filterStatus === character.status;
    
    }) 
    
    /* Ruta dinámica:
      useLocation:
        - comprobar que estoy en la ruta de la vista detalle
        - coger el id de la ruta
        - buscar la persona que tenga ese id en mi lista de 
        - pasar ese personaje al componente characterDetail

    */

    const { pathname } = useLocation();
    const routeData = matchPath("/detail/:id", pathname);

/*     si routeData es diferente de null (significa que estoy   en la ruta) --> condicional,
      - obtener el id, buscar la persona y si no, no quiero hacer nada */

      let idCharacterRute = undefined;
      if (routeData !== null) {
        idCharacterRute = parseInt(routeData.params.id);

      } 
      const characterSelected = filteredCharacters.find((character) => {
        
        return character.id === idCharacterRute

      });


  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={(
            <>
              <Filters onChangeName={changeName} onChangeStatus={changeStatus}/>
              <CharacterList charactersData={filteredCharacters} />
              </>
          )}/>
          <Route path="/detail/:id" element={<CharacterDetail character={characterSelected}/>}/>

        </Routes>

      </main>
    </>
  );
}

export default App;
