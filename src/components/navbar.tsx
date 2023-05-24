import React from 'react'
import {Link, NavLink, useLocation} from 'react-router-dom'

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
  const location = useLocation();
  const isLinkActive = (linkUrl: string) => {
    return location.pathname === linkUrl;
  };
  return (
  <nav className="navbar navbar-expand-lg bg-warning">
    <div className="container">
      <Link to={'/'}> <img className={styles.img_logo} src={logo} alt="" /> </Link>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav justify-content-end">
          <li className="nav-item">
            <NavLink className={`nav-link ${isLinkActive('/') ? 'active' : ''}`} to={'/'}>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={`nav-link ${isLinkActive('/pokedex') ? 'active' : ''}`} to={'/pokedex'}>Pokedex</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={`nav-link ${isLinkActive('/legendaries') ? 'active' : ''}`} to={'/legendaries'}>Legendaries</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={`nav-link ${isLinkActive('/documentation') ? 'active' : ''}`} to={'/documentation'}>Documentation</NavLink>
          </li>
        </ul>
      </div>
    </div>
</nav>
  )
}


export default NavBar