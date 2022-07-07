import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
        <nav>
            <Link to='/home'>Home</Link>
            <Link to='/create'>Create Pokemon</Link>
        </nav>  

    </>
  )
}
