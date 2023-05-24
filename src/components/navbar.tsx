import React from 'react'
import {Link} from 'react-router-dom'
import styles from './index.module.css'
import logo from '../assets/img/Logo.png'

/*
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
}*/

const NavBar = () => {
  return (
  <nav className="navbar navbar-expand-lg bg-warning">
    <div className="container">
      <Link to={'/'}> <img className={styles.img_logo} src={logo} alt="" /> </Link>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav justify-content-end">
          <li className="nav-item">
            <Link className="nav-link active" to={'/'}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'/pokedex'}>Pokedex</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'/legendaries'}>Legendaries</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'/documentation'}>Documentation</Link>
          </li>
        </ul>
      </div>
    </div>
</nav>
  )
}


export default NavBar