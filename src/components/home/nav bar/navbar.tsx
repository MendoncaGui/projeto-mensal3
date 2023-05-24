import React from "react";
import styles from './index.module.css'


const NavBar = () => {
    const logoNav = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"

    return (
        <nav>
            <div>
                <img className={styles.navbar_img} alt="pokeapi-logo" src={logoNav} />
            </div>
        </nav>
    )
} 

export default NavBar