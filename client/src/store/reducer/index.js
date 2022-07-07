// import { useEffect } from "react";
// import { useDispatch } from "react-redux";

import { getPokemonsById } from "../actions";
import { GET_POKEMONS, GET_POKEMONS_BY_ID, GET_TYPES, POST_POKEMON } from "../actions/actionsVariables";

const initialState = {
    pokemons: [],
    pokemonDetail: {},
    types: []
}

export default function rootReducer(state=initialState, action){
    switch (action.type) {
        case GET_POKEMONS:
            //lógica: ejemplo ordenar o filtrar
            return {
                ...state,
                pokemons: action.payload
            };
            case GET_POKEMONS_BY_ID:  
            return{
                ...state,
                pokemonDetail: action.payload
                }
            case GET_TYPES:
                return{
                    ...state,
                    types: action.payload
                }
            case POST_POKEMON:
                console.log(action.payload);

                // let dispatch = useDispatch();
                // let id = action.payload;
                // (getPokemonsById(id));

                return action.payload;
        default:
            return state;
    }
}