import styles from './index.module.css'
import rocket from '../assets/img/Team_Rocket.png'
import notfound from '../assets/img/404.png'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className={`container-fluid h-100 d-inline-block ${styles.background_notfound}`}>
        <div className='row position-relative align-items-center'>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 offset-sm-0 offset-md-3 offset-lg-3 offset-xl-3">
                <div className='row position-relative align-items-center'>
                    <div className="col text-center position-absolute">
                        <img src={notfound} className='img-fluid' alt="imagem 404" />
                    </div>
                    <div className='row position-relative align-items-center'>
                        <div className="col text-center position-relative">
                            <img src={rocket} className='img-fluid' alt="imagem equipe Rocket" />
                        </div>
                    </div>
                </div>
                <div className='col text-center py-3'>
                    <p className={styles.p_notfound}>The rocket team <span className={styles.span_notfound}>has won this time.</span></p>
                    <Link className={styles.btn_notfound} to={'/'}>Return</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NotFound