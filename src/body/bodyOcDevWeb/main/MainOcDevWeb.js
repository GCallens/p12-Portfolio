import './mainOcDevWeb.scss'
import github from '../../../assets/githubLogo.png'
import ohmyfood from '../../../assets/project/ohmyfood.png'
import printit from  '../../../assets/project/printit.png'
import sophiebluel from  '../../../assets/project/sophiebluel.png'
import kasa from  '../../../assets/project/kasa.png'
import ninacarducci from  '../../../assets/project/ninacarducci.png'
import septevent from  '../../../assets/project/77Events.png'
import argentbank from  '../../../assets/project/Capture d’écran 2023-07-27 à 13.14.57.png'
import portfolio from "../../../assets/project/Capture d’écran 2023-07-27 à 13.14.57.png";

import Footer from "../../../components/footer/Footer";


function MainOcDevWeb() {

    return (

        <main className='partTwo'>

            <section className='project'>

                <div className='project_title'>
                    <div className='project_title_line'></div>
                    <h3 className='project_title_name'>Intégrateur Web</h3>
                </div>

                <div className='project_list'>
                    <ul>
                        <li id="projet1" className='space'>
                            <a href='https://gcallens.github.io/ohmyfood/' target='_blank'>
                                <div className='project_card'>
                                    <div className='project_card_background'>
                                    </div>
                                    <header className='project_card_header'>
                                        <img src={ohmyfood} alt='Oh my food'/>
                                    </header>
                                    <div className='project_card_content'>
                                        <h4>
                                            Oh My Food
                                        </h4>
                                        <p>
                                            Développement d'un site "mobile first" qui répertorie les menus de
                                            restaurants gastronomiques. Incluant des animations CSS.
                                        </p>
                                        <ul>
                                            <li>
                                                HTML
                                            </li>
                                            <li>
                                                CSS
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </a>
                            <div className='repoGitHub'>
                                <a className='repoGitHub_content' href="https://github.com/GCallens/ohmyfood"
                                   target='_blank'>
                                    <span>↳</span>
                                    <img src={github} alt={'GitHub'}/>
                                    <p>
                                        Repositery GitHub
                                    </p>
                                </a>
                            </div>
                        </li>
                        <li id="projet2" className='space'>
                            <a href='https://gcallens.github.io/printit/' target='_blank'>
                                <div className='project_card'>
                                    <div className='project_card_background'>
                                    </div>
                                    <header className='project_card_header'>
                                        <img src={printit} alt='Print It'/>
                                    </header>
                                    <div className='project_card_content'>
                                        <h4>
                                            Print It
                                        </h4>
                                        <p>
                                            Développement d'un carrousel en Javascript.
                                        </p>
                                        <ul>
                                            <li>
                                                Javascript
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </a>
                            <div className='repoGitHub'>
                                <a className='repoGitHub_content' href="https://github.com/GCallens/printit"
                                   target='_blank'>
                                    <span>↳</span>
                                    <img src={github} alt={'GitHub'}/>
                                    <p>
                                        Repositery GitHub
                                    </p>
                                </a>
                            </div>
                        </li>
                        <li id="projet3" className='space'>
                            <div className='project_card'>
                                <div className='project_card_background'>
                                </div>
                                <header className='project_card_header'>
                                    <img src={sophiebluel} alt='Sophie Bluel'/>
                                </header>
                                <div className='project_card_content'>
                                    <h4>
                                        Portfolio architecte Sophie Bluel
                                    </h4>
                                    <p>
                                        Développement d'une page de présentation des travaux de l'architecte,
                                        d'une page de connexion de l'administrateur du site, et
                                        d'une modale permettant d'uploader de nouveaux médias.
                                    </p>
                                    <ul>
                                        <li>
                                            HTML
                                        </li>
                                        <li>
                                            CSS
                                        </li>
                                        <li>
                                            Javascript
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='repoGitHub'>
                                <a className='repoGitHub_content'
                                   href="https://github.com/GCallens/Projet6-Portfolio-architecte-sophie-bluel"
                                   target='_blank'>
                                    <span>↳</span>
                                    <img src={github} alt={'GitHub'}/>
                                    <p>
                                        Repositery GitHub
                                    </p>
                                </a>
                            </div>
                        </li>
                        <li id="projet4" className='space'>
                            <div className='project_card'>
                                <div className='project_card_background'>
                                </div>
                                <header className='project_card_header'>
                                    <img src={kasa} alt='Kasa'/>
                                </header>
                                <div className='project_card_content'>
                                    <h4>
                                        Kasa, agence immobilière
                                    </h4>
                                    <p>
                                        Développement de l'ensemble de l'application React, les composants React,
                                        les routes React Router.
                                    </p>
                                    <ul>
                                        <li>
                                            HTML
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
                            <div className='repoGitHub'>
                                <a className='repoGitHub_content' href="https://github.com/GCallens/p8-Kasa"
                                   target='_blank'>
                                    <span>↳</span>
                                    <img src={github} alt={'GitHub'}/>
                                    <p>
                                        Repositery GitHub
                                    </p>
                                </a>
                            </div>
                        </li>
                        <li id="projet5" className='space'>
                            <a href='https://gcallens.github.io/p9-ninaCarducci/' target='_blank'>
                                <div className='project_card'>
                                    <div className='project_card_background'>
                                    </div>
                                    <header className='project_card_header'>
                                        <img src={ninacarducci} alt='Nina Carducci'/>
                                    </header>
                                    <div className='project_card_content'>
                                        <h4>
                                            Nina Carducci, photographe
                                        </h4>
                                        <p>
                                            Faire une optimisation globale du site tant sur les performances que
                                            sur le SEO, Mettre en place le référencement local en utilisant Schema.org,
                                            Ajouter les metas pour les réseaux sociaux, Faire les modifications liées à
                                            l’accessibilité du site.
                                        </p>
                                        <ul>
                                            <li>
                                                LightHouse
                                            </li>
                                            <li>
                                                GitHub Pages
                                            </li>
                                            <li>
                                                Bootstrap
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </a>
                            <div className='repoGitHub'>
                                <a className='repoGitHub_content' href="https://github.com/GCallens/p9-ninaCarducci"
                                   target='_blank'>
                                    <span>↳</span>
                                    <img src={github} alt={'GitHub'}/>
                                    <p>
                                        Repositery GitHub
                                    </p>
                                </a>
                            </div>
                        </li>
                        <li id="projet6" className='space'>
                            <div className='project_card'>
                                <div className='project_card_background'>
                                </div>
                                <header className='project_card_header'>
                                    <img src={septevent} alt='724events'/>
                                </header>
                                <div className='project_card_content'>
                                    <h4>
                                        724Events
                                    </h4>
                                    <p>
                                        Débuggage et test du site.
                                    </p>
                                    <ul>
                                        <li>
                                            Javascript
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='repoGitHub'>
                                <a className='repoGitHub_content' href="https://github.com/GCallens/p10-724events"
                                   target='_blank'>
                                    <span>↳</span>
                                    <img src={github} alt={'GitHub'}/>
                                    <p>
                                        Repositery GitHub
                                    </p>
                                </a>
                            </div>
                        </li>
                        <li id="projet7" className='space'>
                            <div className='project_card'>
                                <div className='project_card_background'>
                                </div>
                                <header className='project_card_header'>
                                    <img src={argentbank} alt='Argent Bank'/>
                                </header>
                                <div className='project_card_content'>
                                    <h4>
                                        Argent Bank
                                    </h4>
                                    <p>
                                        Création de l’application web complète et responsive avec React.
                                        Utiliser Redux pour gérer le state de l'ensemble de l'application.
                                        Création de fonctionnalités pour des transactions.
                                    </p>
                                    <ul>
                                        <li>
                                            Swagger
                                        </li>
                                        <li>
                                            Redux
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
                            <div className='repoGitHub'>
                                <a className='repoGitHub_content' href="https://github.com/GCallens/p11-argentBank"
                                   target='_blank'>
                                    <span>↳</span>
                                    <img src={github} alt={'GitHub'}/>
                                    <p>
                                        Repositery GitHub
                                    </p>
                                </a>
                            </div>
                        </li>
                        <li id="projet8" className='space'>
                            <a href='https://gaetancallens.com' target='_blank'>
                                <div className='project_card'>
                                    <div className='project_card_background'>
                                    </div>
                                    <header className='project_card_header'>
                                        <img src={portfolio} alt='gaetancallens.com'/>
                                    </header>
                                    <div className='project_card_content'>
                                        <h4>
                                            Portfolio gaetancallens.com
                                        </h4>
                                        <p>
                                            Création de mon portfolio personnel, contenant une
                                            présentation, une liste de mes compétences. Montrer les projets sur lesquels
                                            j'ai travaillé et mes formations suivies.
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
                            <div className='repoGitHub'>
                                <a className='repoGitHub_content' href="https://github.com/GCallens/p12-Portfolio"
                                   target='_blank'>
                                    <span>↳</span>
                                    <img src={github} alt={'GitHub'}/>
                                    <p>
                                        Repositery GitHub
                                    </p>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>

            </section>

            <Footer/>

        </main>

    )

}

export default MainOcDevWeb
