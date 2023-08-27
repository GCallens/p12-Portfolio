import './headerOcDevWeb.scss'
import {Link} from "react-router-dom";
import SocialMedia from "../../../components/socialMedia/SocialMedia";
import NavigationOcDevWeb from "../../../components/navigationOcDevWeb/NavigationOcDevWeb";


function HeaderOcDevWeb() {


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
                    <NavigationOcDevWeb/>
                    <Link to='/contact'>
                        <button>Me contacter</button>
                    </Link>
                </div>
                <SocialMedia/>
            </div>

        </header>
    )
}

export default HeaderOcDevWeb
