import styles from './index.module.css'

const footer = () => {
  return (
    <div className={`container-fluid g-0  ${styles.bg_pikachu}`}>
         <div className="row g-0 align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-7">
              <div className={styles.div_text}>
                <h3>
                  Make with ❤️ for the PokéSpartans team Platzi Master
                </h3> 
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-5">
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

export default footer