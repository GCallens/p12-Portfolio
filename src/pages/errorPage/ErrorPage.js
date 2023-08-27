import './errorPage.scss'
import {Link} from 'react-router-dom';


function ErrorPage() {

    return (

        <div className='errorPage'>
            <div className='errorPage_partOne'>
                <h1>404</h1>
                <div className='errorPage_partOne_line'>
                </div>
                <p>La page est introuvable.</p>
            </div>

            <div className='errorPage_partTwo'>
                <Link to='/'>
                    <h4>
                        Retourner sur la page d'accueil
                    </h4>
                </Link>
            </div>

        </div>

    )
}

export default ErrorPage

