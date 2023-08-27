import './header.scss'
import {Link} from "react-router-dom";
import SocialMedia from "../../../components/socialMedia/SocialMedia";
import Navigation from "../../../components/navigation/Navigation";


function Header() {


    return (

        <header className='partOne'>

            <div className='partOne_elements'>
                <div>
                    <h1 className='partOne_name'>
                        <a href={'/'}>
                            Gaetan Callens
                        </a>
                    </h1>
                    <h2 className='partOne_job'>
                        Développeur Front-end
                    </h2>
                    <p className='partOne_shortPresentation'>
                        Je design et développe des sites internet et applications mobile.
                    </p>
                    <Navigation/>
                    <Link to='/contact'>
                        <button>Me contacter</button>
                    </Link>
                </div>
                <SocialMedia/>
            </div>

        </header>
    )














    /*
    return (
        <header className='header'>
            <div>
                <Link to='/'>
                    <img src={Logo} alt="Logo Portfolio"/>
                </Link>
            </div>

            <div className='header_option'>
                <button>Langue</button>
                <button>Mode Nuit</button>
            </div>
        </header>
    )

     */

}

export default Header
