import './myEducations.scss'
import openclassroom from '../../assets/logo_openClassrooms.png'
import {Link} from "react-router-dom";

function MyEducations() {

    return (

        <section id='education'>

            <div className='education_title'>
                <div className='education_title_line'></div>
                <h3 className='education_title_name'>Mes formations</h3>
            </div>

            <ol>
                <li>
                    <Link to='/OcDevWeb'>
                        <div className='education_card'>
                            <div className='education_card_background'>
                            </div>
                            <header className='education_card_header'>
                                DEC 2022 — SEPT 2023
                            </header>
                            <div className='education_card_content'>
                                <div className='education_card_content_logo'>
                                    <img src={openclassroom} alt={'OpenClassroom'}/>
                                </div>
                                <h4>
                                    Integrateur Web
                                </h4>
                                <h5>
                                    Openclassroom
                                </h5>
                                <h5>
                                    Bac +2
                                </h5>
                                <p>
                                    Premiers pas dans le développement web, je me suis chargé d’intégrer les éléments
                                    visuels
                                    dans les pages d’un site web pour créer une interface harmonieuse, lisible et
                                    facilement navigable. Une première formation qui offre de solides connaissances des
                                    langages de programmation pour pouvoir afficher le plus fidèlement possible le design
                                    graphique sur tous types de navigateurs et tailles d’écrans.
                                </p>
                                <ul>
                                    <li>
                                        HTML
                                    </li>
                                    <li>
                                        CSS
                                    </li>
                                    <li>
                                        Sass
                                    </li>
                                    <li>
                                        Javascript
                                    </li>
                                    <li>
                                        Node.js
                                    </li>
                                    <li>
                                        React
                                    </li>
                                    <li>
                                        Redux
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Link>
                </li>
            </ol>

        </section>

    )
}

export default MyEducations
