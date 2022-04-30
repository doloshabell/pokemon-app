import { GET_ALL_POKEMON, GET_SINGLE_POKEMON } from "./actionTypes";
import * as api from '../../api';

export const getAllPokemon = () => async (dispatch) => {
  try {
    const { data } = await api.getAllPokemon();
    const res = data.results;
    console.log(res);

    async function createPokemonObject(results) {
      const allPokemons = [];
      for (let i = 0; i < results.length; i++) {
        const res = await api.singleData(results[i].name);
        const data = res.data;

        if (allPokemons.indexOf(data) === -1) {
          allPokemons.push(data);
          allPokemons.sort((a, b) => a.id - b.id)
        }
      }
      dispatch({ type: GET_ALL_POKEMON, payload: allPokemons });
      console.log(allPokemons);
    }
    createPokemonObject(res);
  } catch (error) {
    console.log(error.message);
  }
};

export const getSinglePokemon = (name) => async (dispatch) => {
  try {
    const { data } = await api.singleData(name);

    dispatch({ type: GET_SINGLE_POKEMON, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};