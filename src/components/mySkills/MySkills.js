import './mySkills.scss'

// import img noir & blanc
import html from '../../assets/skill/B&W/html5.png'
import css from '../../assets/skill/B&W/css3.png'
import sass from '../../assets/skill/B&W/sass.png'
import javascript from '../../assets/skill/B&W/javascript.png'
import nodejs from '../../assets/skill/B&W/nodejs.png'
import react from '../../assets/skill/B&W/react.png'
import github from '../../assets/skill/B&W/github.png'
import photoshop from '../../assets/skill/B&W/photoshop.png'
import illustrator from '../../assets/skill/B&W/illustrator.png'
import xcode from '../../assets/skill/B&W/xcode.png'
import fresco from '../../assets/skill/B&W/fresco.png'
import procreate from '../../assets/skill/B&W/procreate.png'

// import img couleur
import htmlColor from '../../assets/skill/html5.png'
import cssColor from '../../assets/skill/css3.png'
import sassColor from '../../assets/skill/sass.png'
import javascriptColor from '../../assets/skill/javaScript.png'
import nodejsColor from '../../assets/skill/nodejs.png'
import reactColor from '../../assets/skill/react.png'
import githubColor from '../../assets/skill/github.png'
import photoshopColor from '../../assets/skill/photoshop.png'
import illustratorColor from '../../assets/skill/illustrator.png'
import xcodeColor from '../../assets/skill/xcode.png'
import frescoColor from '../../assets/skill/fresco.png'
import procreateColor from '../../assets/skill/procreate.png'


function MySkills() {

    return (

        <section id='skill'>

            <div className='skill_top'>

                <div className='skill_top_title'>
                    <div className='skill_top_title_line'></div>
                    <h3 className='skill_top_title_name'>Mes compétences</h3>
                </div>

                <div className='skill_top_card'>

                    <div className='skill_top_card_content'>
                        <h4>Les technologies que j'utilise</h4>
                        <div className='skill_top_card_content_box'>
                            <div className='technologies'>
                                <div className='technologies_row'>
                                    <div>
                                        <img className='technologies_color' src={htmlColor} alt='HTML5'/>
                                        <img src={html} alt='HTML5'/>
                                    </div>
                                    <div>
                                        <img className='technologies_color' src={cssColor} alt='CSS3'/>
                                        <img src={css} alt='CSS3'/>
                                    </div>
                                    <div>
                                        <img className='technologies_color' src={sassColor} alt='SASS'/>
                                        <img src={sass} alt='SASS'/>
                                    </div>
                                </div>
                                <div className='technologies_row'>
                                    <div>
                                        <img className='technologies_color' src={javascriptColor} alt='JAVASCRIPT'/>
                                        <img src={javascript} alt='JAVASCRIPT'/>
                                    </div>
                                    <div>
                                        <img className='technologies_color' src={nodejsColor} alt='NODE.JS'/>
                                        <img src={nodejs} alt='NODE.JS'/>
                                    </div>
                                    <div>
                                        <img className='technologies_color' src={reactColor} alt='REACT'/>
                                        <img src={react} alt='REACT'/>
                                    </div>
                                </div>
                            </div>
                            <div className='line'>
                            </div>
                            <div>
                                <div>
                                    <img className='github_color' src={githubColor} alt='GITHUB'/>
                                    <img src={github} alt='GITHUB'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='skill_top_card'>
                    <div className='skill_top_card_content'>
                        <h4>Les technologies en cours d'apprentissage</h4>
                        <div className='skill_top_card_content_box'>
                            <div className='technologies'>
                                <div>
                                    <img className='technologies_color' src={xcodeColor} alt='XCode'/>
                                    <img src={xcode} alt='XCode'/>
                                </div>
                                <ul>
                                    <li>
                                        iOS
                                    </li>
                                    <li>
                                        macOS
                                    </li>
                                    <li>
                                        iPadOS
                                    </li>
                                    <li>
                                        watchOS
                                    </li>
                                    <li>
                                        tvOS
                                    </li>
                                    <li>
                                        visionOS
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='skill_top_card'>
                    <div className='skill_top_card_content'>
                        <h4>Graphic Designer</h4>
                        <div className='skill_top_card_content_box'>
                            <div className='technologies'>
                                <div>
                                    <img className='technologies_color' src={photoshopColor} alt='Photoshop'/>
                                    <img src={photoshop} alt='Photoshop'/>
                                </div>
                                <div>
                                    <img className='technologies_color' src={illustratorColor} alt='Illustrator'/>
                                    <img src={illustrator} alt='Illustrator'/>
                                </div>
                                <div>
                                    <img className='technologies_color' src={frescoColor} alt='Fresco'/>
                                    <img src={fresco} alt='Fresco'/>
                                </div>
                                <div>
                                    <img className='technologies_color' src={procreateColor} alt='Procreate'/>
                                    <img src={procreate} alt='Procreate'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default MySkills
