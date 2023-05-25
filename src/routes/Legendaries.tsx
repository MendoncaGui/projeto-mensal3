import { Card, Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PokemonCard from '../components/cards/card'
import axios from 'axios'
import Footer from '../components/footer/footer'
import styles from './index.module.css'

const Legendaries = () => {
    useEffect(() => {
        getPokemons()
    })

    const [pokemons, setPokemons] = useState([]);
    const getPokemons = () => {
        var endpoints = [];
        for(var i = 1 ; i<100 ; i++){
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        let response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
        /*axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=50")
        .then((res) => setPokemons(res.data.results))
        .catch((err) => console.log(err))*/
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
                <input  className="form-control" name="search" maxLength={25} type="text" placeholder="Find your Pokemon..."/>
              </div>
            </div>
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

/*<h3 className={styles.title}>800 <span>Pokemons</span> for you to choose your favorite</h3>
        <Container  maxWidth="lg"/>
            <Grid container spacing={3}>
                {pokemons.map((pokemon, key) => 
                <Grid item xs={3} key={key}>
                    <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default } types={pokemon.data.types} stats={pokemon.data.stats}/>
                </Grid> )}
            </Grid>
            <div className={`container-fluid g-0 `}>
                <Footer/>
            </div> */

export default Legendaries
