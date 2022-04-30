import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton'
import { getAllPokemon } from '../redux/actions/pokemonAction';
import PokemonCard from '../components/PokemonCard';

function PokemonList() {
  const dispatch = useDispatch();
  const { pokemons } = useSelector(state => state.pokemons);
  const [count, setCount] = useState(20);
  console.log(pokemons);

  const loadMorePets = () => {
    setCount(count + 20);
  };

  useEffect(() => {
    dispatch(getAllPokemon());
  }, [dispatch]);

  const Loading = () => {
    return (
      <>
        <div className="app-container">
          <h1>Loading....</h1>
          <div className="pokemon-container">
            <div className="all-container">
              <div className="thumb-container rock">
                <Skeleton height={250} duration={2} />
              </div>
              <div className="thumb-container ghost">
                <Skeleton height={250} duration={2} />
              </div>
              <div className="thumb-container electric">
                <Skeleton height={250} duration={2} />
              </div>
              <div className="thumb-container bug">
                <Skeleton height={250} duration={2} />
              </div>
              <div className="thumb-container water">
                <Skeleton height={250} duration={2} />
              </div>
              <div className="thumb-container fairy">
                <Skeleton height={250} duration={2} />
              </div>
              <div className="thumb-container fire">
                <Skeleton height={250} duration={2} />
              </div>
              <div className="thumb-container grass">
                <Skeleton height={250} duration={2} />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  if (pokemons.length > 0) {
    return (
      <div className="app-container">
        <h1>Pokemon Evolution</h1>
        <div className="pokemon-container">
          <div className="all-container">
            {pokemons.slice(0, count).map((item) =>
              <PokemonCard
                key={item.id}
                id={item.id}
                image={item.sprites.other.dream_world.front_default}
                name={item.name}
                type={item.types[0].type.name} />
            )}
          </div>
          <button onClick={loadMorePets} className="load-more fw-bold fs-5 btn-dark text-dark">Load More</button>
        </div>
      </div>
    )
  } else {
    return (
      <>
        <Loading />
      </>
    )
  }
}

export default PokemonList;