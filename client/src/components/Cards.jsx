import { React, useEffect } from "react";
import { useDispatch, useSelector, } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonsById } from '../store/actions';

function Cards() {
  
  let dispatch = useDispatch();

  let pokemon = useSelector(state => state.pokemonDetail);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getPokemonsById(id))
  }, [dispatch,id])

  const { sprite, hp, types, name, height, attack, defense, speed, weight } = pokemon;
  

  return (
    <>
      {sprite && name ?
        <div>
          <img src={sprite} alt={sprite} />
          <h2>{name.toUpperCase()}</h2>
          <p><strong>Hp: {hp}</strong></p>
          <p><strong>{types.map(type=>type).join(' - ').toUpperCase()}</strong></p>
          <p><strong>Attack: {attack}</strong></p>
          <p><strong>Defense: {defense}</strong></p>
          <p><strong>Speed: {speed}</strong></p>
          <p><strong>Height: {height}</strong></p>
          <p><strong>Weight: {weight}</strong></p>
        </div>
      
      : <div>Loading</div>}
    </>
  )
}

export default Cards