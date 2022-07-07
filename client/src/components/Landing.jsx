import React from 'react'
import { NavLink } from 'react-router-dom'
import { Home } from './Home'


export const Landing = () => {
  return (
    <div>
      <h1>Welcome to my Pokedex :D</h1>
      <NavLink to={'/home'}>
        <button to={<Home />}> Let´s start</button>
      </NavLink>
    </div>
  )
}
