import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({pokemons, onSearch, onNewPokemon}) {
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onNewPokemon={onNewPokemon}/>
      <br />
      <Search onSearch={onSearch}/>
      <br />
      <PokemonCollection pokemons={pokemons}/>
    </Container>
  );
}

export default PokemonPage;
