import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Pokemon {
  name: string;
  weight: number;
  sprites: {
    front_default: string;
  };
}

const Home = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [foundPokemon, setFoundPokemon] = useState<Pokemon | null>(null);

  const getPokemons = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
      const data = response.data.results;
      setPokemon(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`
      );
      const data = response.data;
      setFoundPokemon(data);
    } catch (error) {
      console.log(error);
      setFoundPokemon(null);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Search Pokemon"
        />
      </div>
      {foundPokemon ? (
        <div>
          <h2>{foundPokemon.name}</h2>
          <p>Weight: {foundPokemon.weight}</p>
          <img src={foundPokemon.sprites.front_default} alt={foundPokemon.name} />
        </div>
      ) : (
        <div>
          {pokemon.map((poke) => (
            <Link key={poke.name} to={`/pokemon/${poke.name}`}>
              {poke.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
