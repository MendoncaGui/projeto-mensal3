import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar">
        <h2><Link to={'/'}>Logo pokemon</Link></h2>
        <ul>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/pokedex'}>Pokedex</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar