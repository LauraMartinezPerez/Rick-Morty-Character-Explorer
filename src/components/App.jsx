import "../scss/App.scss";
import Header from "./Header";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import { useEffect, useState } from "react";

function App() {

    //VARIABLES DE ESTADO
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
        .then(res => res.json())
        .then(data => {

            const parsedCharacters = data.results.map((character) => {
                return {
                image: character.image,
                name: character.name,
                species: character.species,
                status: character.status,
                id: character.id,

                }
                
            }) 
        
            setCharacters(parsedCharacters);
            console.log(parsedCharacters);

        })
    }, [])

 

    return (
        <>
            <Header /> 
            <main>
                <Filters />
                <CharacterList charactersData={characters}/>
            </main>

        </>
    )
}

export default App
