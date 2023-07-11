import './name&Job.scss'
import {Link} from "react-router-dom";
import videoPresentation from '../../assets/60imgs.mp4'

function NameJob() {

    return (
        <div className='presentation'>
            <div className='presentation_text'>
                <h1>GAETAN A. CALLENS</h1>
                <h2>Développeur Front-end & Graphiste</h2>
                <p>Autodidacte de 22 ans, je suis passionné par le développement web,
                    l'UI/UX et l'accessibilité depuis 9 ans.</p>
                <Link to='/contact'>
                    <button>Me contacter</button>
                </Link>
            </div>
            <video src={videoPresentation} autoPlay loop muted/>
        </div>
    )

}

export default NameJob
