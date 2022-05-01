import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getSinglePokemon } from '../redux/actions/pokemonAction';

function PokemonDetail() {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { pokemon } = useSelector(state => state.pokemons);

  useEffect(() => {
    dispatch(getSinglePokemon(name));
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 text-center mt-5">
          <h1 className="mt-5 text-uppercase">{pokemon.name}</h1>
          <img src={pokemon.sprites?.other.dream_world.front_default} alt={pokemon.name} />
          <div className="row justify-content-center">
          <button className="col-6 col-sm-2 text-capitalize mt-4 btn btn-info"><Link to="#" className="text-decoration-none fs-6 fw-bolder text-white">Catch {pokemon.name}</Link></button>
          </div>
        </div>
        <div className="col-12 ms-1 align-content-center">
          <h3 className="text-center mt-4 my-3">Types:</h3>
          <div className="row justify-content-center"> {pokemon.types === undefined ? null : pokemon.types.map((item, index) => {
            return (
              <div key={index} className="col-5 col-sm-2 border border-2 rounded-pill me-1 mb-1 text-center">
                <small>{item.type?.name}</small>
              </div>
            )
          })}
          </div>
        <div className="col-12 ms-1 align-content-center">
          <h3 className="text-center mt-2 my-3">Moves:</h3>
          <div className="row justify-content-center"> {pokemon.moves === undefined ? null : pokemon.moves.map((item, index) => {
            return (
              <div key={index} className="col-5 col-sm-2 border border-2 rounded-pill me-1 mb-1 text-center">
                <small>{item.move.name}</small>
              </div>
            )
          })}
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonDetail;