import CharacterCard from "./CharacterCard";

function CharacterList({charactersData}) {
  return ( 
    <section>
        <ul className="listClass__ul">
          {
            charactersData.map((character) => {    
              return <CharacterCard key={character.id} characterData={character
              } />
            })
          }
        </ul>
    </section>
  )
}

export default CharacterList