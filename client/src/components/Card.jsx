import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Card({pokemon}) {
    return (
    <li >
        <NavLink to={`/pokemon/${pokemon.id}`}>
            <button>
            <img
                width={250}
                height={250}  
                src={pokemon.sprite} 
                alt={pokemon.sprite}
            />
            <div>{pokemon.name}</div>
            <div>{pokemon.types}</div>
            <br />

            </button>

        </NavLink>        
    </li>
  )
}
