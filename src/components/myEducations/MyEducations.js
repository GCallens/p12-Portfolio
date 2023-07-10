import './myEducations.scss'
import {Link} from "react-router-dom";
import Logo_OC from "../../assets/logo_openClassrooms.png";

function MyEducations() {

    return (
        <div>
            {/* Lien vers l'autre page */}
            <div>
                <ul>
                    <li>
                        <Link to="/devWeb-OC">
                            <div>
                                <img src={Logo_OC} alt="Formation Intégrateur Web"/>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MyEducations
