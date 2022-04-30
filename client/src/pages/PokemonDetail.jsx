import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSinglePokemon } from '../redux/actions/pokemonAction';

function PokemonDetail() {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { pokemon } = useSelector(state => state.pokemons);

  useEffect(() => {
    dispatch(getSinglePokemon(name));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprites?.other.dream_world.front_default} alt={pokemon.name} />
        </div>
        <div className="col-12 ms-1">
            Moves:<div className="row"> {pokemon.moves === undefined ? null : pokemon.moves.map((item, index) => {
              return (
                <div key={index} className="col-1 border border-2 rounded-pill me-1 mb-1 text-center">
                  <small>{item.move.name}</small>
                </div>
              )
            })}
            </div>
          </div>
        </div>
          <div><h1>moves</h1></div>
          <button className='btn btn-dark'>load</button>
      </div>
  )
}

export default PokemonDetail;