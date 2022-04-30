import axios from 'axios';

const allPokemons = "https://pokeapi.co/api/v2/pokemon?limit=1200";
const singlePokemon = "https://pokeapi.co/api/v2/pokemon";

export const getAllPokemon = () => axios.get(allPokemons);
export const singleData = (name) => axios.get(`${singlePokemon}/${name}`);