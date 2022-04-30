import { GET_ALL_POKEMON, GET_SINGLE_POKEMON } from "../actions/actionTypes";

const initialState = {
  pokemons: [],
  pokemon: {}
};

const pokemons = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POKEMON:
      console.log(action.payload);
      return {
        ...state,
        pokemons: action.payload
      };
    case GET_SINGLE_POKEMON:
      return {
        ...state,
        pokemon: action.payload
      }
    default:
      return state;
  }
};
export default pokemons;