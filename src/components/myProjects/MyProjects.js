import './myProjects.scss'
import portfolio from '../../assets/project/Capture d’écran 2023-07-27 à 13.14.57.png'

function MyProjects() {

    return (

        <section id='project'>

            <div className='project_title'>
                <div className='project_title_line'></div>
                <h3 className='project_title_name'>Mes projets</h3>
            </div>

            <div className='project_list'>
                <ul>
                    <li className='space'>
                        <a href='https://astmontevrain.com' target='_blank'>
                            <div className='project_card'>
                                <div className='project_card_background'>
                                </div>
                                <header className='project_card_header'>
                                    <img src={portfolio} alt='gaetancallens.com'/>
                                </header>
                                <div className='project_card_content'>
                                    <h4>
                                        AST Montévrain
                                    </h4>
                                    <p>
                                        Site internet du club de tennis de le ville de Montévrain, Seine et Marne 77.
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
                                            React
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className='space'>
                        <a href='https://gaetancallens.com' target='_blank'>
                            <div className='project_card'>
                                <div className='project_card_background'>
                                </div>
                                <header className='project_card_header'>
                                    <img src={portfolio} alt='gaetancallens.com'/>
                                </header>
                                <div className='project_card_content'>
                                    <h4>
                                        gaetancallens.com (v1)
                                    </h4>
                                    <p>
                                        V1 Portfolio issue du projet final de ma formation d'intégrateur web,
                                        développé avec React.
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
                                            React
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>

        </section>

    )
}

export default MyProjects
