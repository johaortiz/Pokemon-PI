import axios from 'axios';
import { GET_POKEMONS, GET_POKEMONS_BY_ID, GET_TYPES, POST_POKEMON } from "./actionsVariables";


export function getPokemons(){
    return (dispatch) =>{
        axios.get('http://localhost:3001/allPokemons')
        .then(pokemons=>{
            dispatch({
                type: GET_POKEMONS,
                payload: pokemons
            });
        }).catch((error)=>{
            console.log(error);
        });
    };
};

export function getPokemonsById(id){
    return (dispatch)=>{
        axios.get(`http://localhost:3001/id/${id}`)
        .then(pokemon=>{
            dispatch({
                type: GET_POKEMONS_BY_ID,
                payload: pokemon.data
            });
        }).catch((error)=>{
            console.log(error);
        });
    };
};

export function getTypes(){
    return(dispatch)=>{
        axios.get(`http://localhost:3001/types`)
        .then(type=>{
            dispatch({
                type:GET_TYPES,
                payload: type.data
            });
        }).catch((error)=>{
            console.log(error);
        });
    };
};

export function postPokemons(name, hp, attack, defense, speed, height, weight, sprite, types){
    return(dispatch)=>{
        axios.post('http://localhost:3001/post', {
            name,
            hp,
            attack,
            defense,
            speed,
            height,
            weight,
            sprite,
            types
          })
          .then(response=>{{
            dispatch({
                type: POST_POKEMON,
                payload: response
            })
          }})
          .catch((error)=>{
            console.log(error);
        });
    };
};