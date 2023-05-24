import React from 'react'
import styles from './index.module.css'
import banner from '../assets/img/banner.png'
import { Link } from 'react-router-dom'

const home = () => {
  return (
    
        <div className={`container-fluid g-0 ${styles.bg_pikachu}`}>
          <div className="row g-0 align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-5">
              <div className={styles.div_text}>
                <h1 className={styles.title}>Find <span>all your favorite</span> Pokemon</h1>
                <h2>You can know the type of Pokemon, its strengths, disadvantages and abilities</h2>
                <Link to={'/pokedex'}className={`btn btn-success btn-lg ${styles.btn_home}`}> See pokemons</Link>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-7 text-center d-none d-sm-flex">
              <div className={styles.div_img}>
                <img className="img-fluid" src={banner} alt="imagem do pikachu" />
              </div>
            </div>
          </div>
          <div className="row g-0 align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-7">
              <div className={styles.div_text}>
                <h3>
                  Make with ❤️ for the PokéSpartans team Platzi Master
                </h3> 
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-5 text-end">
              <div className={styles.div_text}>
                <h3 className={styles.div_footer}>
                  Our team
                </h3> 
              </div>
            </div>
          </div>
        </div>
  )
}


export default home