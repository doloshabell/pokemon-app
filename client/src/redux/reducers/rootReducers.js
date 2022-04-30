import { combineReducers } from "redux";
import pokemons from './pokemonReducer';

const rootReducers = combineReducers({ pokemons });
export default rootReducers;