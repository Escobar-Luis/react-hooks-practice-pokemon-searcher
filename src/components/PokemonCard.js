import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const[image, setImage] = useState(pokemon.sprites.front)
  function showBack ()  {
    setImage(pokemon.sprites.back)
  }
  function showFront ()  {
    setImage(pokemon.sprites.front)
  }
  return (
    <Card>
      <div>
        <div className="image">
          <img onMouseLeave={showFront} onMouseOver={showBack} src={image} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
