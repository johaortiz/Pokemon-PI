import { React, useEffect } from "react";
import { useDispatch, useSelector, } from "react-redux";
import { getPokemons } from '../store/actions';
import Card from "./Card";

export const Home = () => {

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemons())
    },[dispatch]);

    let pokemons = useSelector(state => state.pokemons);
    // let pagesPokemons = [];
    // for (let i = 0; i < pokemons.length; i+=12) {
    //     pagesPokemons.push(pokemons.slice(i,i+12));
    // };

    return (
    <div>
        <h2>Home</h2>
        <ul>
            {
                pokemons.data?.map((pokemon)=>{
                    return <Card key={pokemon.id} pokemon={pokemon} />
                })
            }
        </ul>
    </div>

  )
}
