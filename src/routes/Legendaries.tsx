import { Card, Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PokemonCard from '../components/cards/card'
import axios from 'axios'
import Footer from '../components/footer/footer'
import styles from './index.module.css'
import { Pokemon } from '../components/interface/interface'
import { Species  } from '../components/interface/interfaceLendario'

const Legendaries = () => {
    useEffect(() => {
        getPokemons()
    })

    const [pokemon, setPokemon] = useState<Pokemon[]>([]);
    const [pokemons, setPokemons] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [foundPokemon, setFoundPokemon] = useState<Pokemon | null>(null);

    //MOSTRA TODOS OS POKEMONS EM TELA
    const getPokemons = () => {
        var endpoints = [];
        for(var i = 1 ; i<100 ; i++){
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        let response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
    };

    const getPokemonDetails = async (name: string) => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = response.data;
        const speciesResponse = await axios.get(data.species.url);
        const speciesData: Species = speciesResponse.data;
        const isLegendary = speciesData.is_legendary;
        const typeClassName = data.types[0].type.name;
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
        <>
          <div className="container">
            <div className="row">
              <div className="col py-4">
                <h1>
                  800 <span>Pokemons</span> for you to choose your favorite
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col">
              <input  
                className="form-control" 
                name="search" 
                maxLength={25}
                type="text" 
                placeholder="Find your Pokemon..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                />
              </div>
            </div>

            {foundPokemon ? (
              
              
              <div className={styles.modal_poke}>
                <div className={styles.modal_dialog}>
                  <div className={styles.modal_content}>

                    <div className='row'>
                    <div className={`col-4 bg-${foundPokemon.typeClassName}`}>
                    <img className='img-fluid' src={foundPokemon.sprites.other['official-artwork'].front_shiny } alt={foundPokemon.name} />
                    </div>
                    <div className='col-8'>
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
                    </div>
                    </div>

                  </div>
                </div>
              </div>
            ) : (
              <div>
              Pokemon not found
              </div>
            )}



            <div className="row py-5">
            {pokemons.map((pokemon, key) => 
              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4" key={key}>
                  <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.other['official-artwork'].front_shiny } types={pokemon.data.types} stats={pokemon.data.stats} typeClass={pokemon.data.types}/>
              </div> 
            )}
            </div>
          </div>
        </>
    )
}

export default Legendaries
