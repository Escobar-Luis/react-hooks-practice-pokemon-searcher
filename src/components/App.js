import React, { useEffect, useState } from "react";
import PokemonPage from "./PokemonPage";

function App() {
  
  const [pokemons, setPokemons] = useState([])
  //we construct search term state with our pokemon statee because we want to filter througn our current pokemon data and constantly re-render our search component so our visible pokemons show
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(r=>r.json())
    .then((pokemonData) => setPokemons(pokemonData))
  }, [])
  
  // we construct pokemon to display for our search bar since we don't want to change our pokemon data but just display some of it.
      const pokemonToDisplay = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(search.toLowerCase()))

      function handleSearch (value) {
        setSearch(value)
      }

      function handleNewPokemon (newPokemon) {
        setPokemons([...pokemons, newPokemon])
      }
  return (
    <div className="App">
      <PokemonPage onNewPokemon={handleNewPokemon} onSearch={handleSearch} pokemons={pokemonToDisplay}/>
    </div>
  );
}

export default App;
