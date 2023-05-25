import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Footer from '../components/footer/footer';

import styles from './index.module.css'

interface Pokemon {
  [x: string]: any;
  name: string;
  weight: number;
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

interface Species {
  is_legendary: boolean;
}

const Pokedex = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [foundPokemon, setFoundPokemon] = useState<Pokemon | null>(null);

  const getPokemons = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=100');
      const data = response.data.results;
      setPokemon(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemonDetails = async (name: string) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = response.data;
      const speciesResponse = await axios.get(data.species.url);
      const speciesData: Species = speciesResponse.data;
      const isLegendary = speciesData.is_legendary;
      setFoundPokemon({ ...data, isLegendary });
    } catch (error) {
      console.log(error);
      setFoundPokemon(null);
    }
  };

  const calculateHP = (stats: { base_stat: number; stat: { name: string } }[]) => {
    const hpStat = stats.find((stat) => stat.stat.name === 'hp');
    if (hpStat) {
      return hpStat.base_stat;
    }
    return 0;
  };

  const handleSearch = async () => {
    try {
      await getPokemonDetails(searchTerm.toLowerCase());
    } catch (error) {
      console.log(error);
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
          <p>HP: {calculateHP(foundPokemon.stats)}</p>
          <p>Attack: {foundPokemon.stats.find((stat) => stat.stat.name === 'attack')?.base_stat}</p>
          <p>Defense: {foundPokemon.stats.find((stat) => stat.stat.name === 'defense')?.base_stat}</p>
          <p>Sp. Attack: {foundPokemon.stats.find((stat) => stat.stat.name === 'special-attack')?.base_stat}</p>
          <p>Sp. Defense: {foundPokemon.stats.find((stat) => stat.stat.name === 'special-defense')?.base_stat}</p>
          <p>Is Legendary: {foundPokemon.isLegendary ? 'Yes' : 'No'}</p>
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
      <div className={`container-fluid g-0 ${styles.div_footer}`}>
            <Footer/>
      </div>
    </div>
  );
};

export default Pokedex;
