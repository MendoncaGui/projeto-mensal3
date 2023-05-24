import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Pokemon {
  name: string;
  base_experience: number;
  sprites: {
    front_default: string;
  };
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  abilities: {
    ability: {
      name: string;
    };
  }[];
  types: {
    type: {
      name: string;
    };
  }[];
}

const Home = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [foundPokemon, setFoundPokemon] = useState<Pokemon | null>(null);

  const getPokemons = async () => {
    try {
      //const responseNome = await axios.get('https://pokeapi.co/api/v2/pokemon/');
      const responseStat = await axios.get('https://pokeapi.co/api/v2/stat/');
      const data = responseStat.data.results;
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

  
  const calculateHP = (stats: { base_stat: number; stat: { name: string } }[]) => {
    const hpStat = stats.find((stat) => stat.stat.name === 'hp');
    if (hpStat) {
      return hpStat.base_stat;
    }
    return 0;
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
          <p>HP: {calculateHP(foundPokemon.stats)}</p>
          <p>Attack: {foundPokemon.stats.find((stat) => stat.stat.name === 'attack')?.base_stat}</p>
          <p>Defense: {foundPokemon.stats.find((stat) => stat.stat.name === 'defense')?.base_stat}</p>
          <p>Sp. Attack: {foundPokemon.stats.find((stat) => stat.stat.name === 'special-attack')?.base_stat}</p>
          <p>Sp. Defense: {foundPokemon.stats.find((stat) => stat.stat.name === 'special-defense')?.base_stat}</p>
          <p>Experience: {foundPokemon.base_experience}</p>
          <p>Type: {foundPokemon.types.map((type) => type.type.name).join(', ')}</p>
          <p>Abilities: {foundPokemon.abilities.map((ability) => ability.ability.name).join(', ')}</p>
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
