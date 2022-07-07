import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getTypes } from '../store/actions';

export default function CreatePokemonTypes() {

    let dispatch = useDispatch();
    let types = useSelector(state=>state.types);
    useEffect(()=>{
        dispatch(getTypes())
    },[dispatch]);

  return (
    <div>
        <select id='selectBox'>
            {
                types?.map(type=>{
                    return <option key={type} name={type} id={type}>{type.toUpperCase()}</option>
                })
            }
        </select>
    </div>
  )
}
