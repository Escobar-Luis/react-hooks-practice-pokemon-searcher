import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onNewPokemon}) {
  const [name, setName] = useState('')
  const [hp, setHP] = useState('')
  const [front, setFront] = useState('')
  const [back, setBack] = useState('')

  function handleSubmit (e) {
    e.preventDefault();
    const newItem = {
      name: name,
      hp : hp,
      sprites : {
        front : front,
        back : back,
      }
    }
    fetch('http://localhost:3001/pokemon', {
      method: "POST",
      headers: {
        'Content-Type' : "application/json"
      },
      body: JSON.stringify(newItem)
      })
      .then(r=>r.json())
      .then((updatedPokemon) => onNewPokemon(updatedPokemon))
    }
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
          <Form.Input onChange={(e) => setHP(e.target.value)} value={hp} fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={front}
            onChange={(e) => setFront(e.target.value)}

          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={back}
            onChange={(e) => setBack(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
