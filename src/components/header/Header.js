import './header.scss'
import Logo from '../../assets/logo.png'
import {Link} from "react-router-dom";

function Header() {

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

}

export default Header
