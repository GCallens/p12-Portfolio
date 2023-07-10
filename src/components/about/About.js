import './about.scss'
import DrawingPhoto from '../../assets/moi_code.jpeg'
import Profil from '../../assets/caricature.jpeg'

function About() {

    return (
        <section className="about">
            <div className='about_photo'>
                <img src={DrawingPhoto} alt='Gaetan A. Callens qui se dessine une caricature'/>
            </div>
            <div className='about_text'>
                <h3 className='about_title'>À propos de moi</h3>
                <p className='about_article'>
                    Je suis passionné par le <strong>développement front-end</strong> et le <strong>web design</strong>,
                    étant sensibilisé à <strong>l'expérience utilisateur</strong> et l'<strong>accessibilité</strong>,
                    je développe des projets centré autour de l'<strong>Humain</strong>.
                </p>
                <p>
                    De plus, je suis intéressé par le monde de l'<strong>open-source</strong>, je suis contributeur de
                    plusieurs projets et je suis en parallèle attiré par l'<strong>enseignement</strong>
                    (talks, articles, mentoring).
                </p>
            </div>
            <img className='about_caricatural' src={Profil} alt='Caricature de Gaetan A. Callens'/>
        </section>
    )
}

export default About
