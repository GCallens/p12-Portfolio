import './name&Job.scss'
import {Link} from "react-router-dom";

function NameJob() {

    return (
        <div>
            <div className='presentation'>
                <h1 className='presentation_name'>GAETAN A. CALLENS</h1>
                <h2 className='presentation_job'>Développeur Front-end & Graphiste</h2>
                <p>Autodidacte de 22 ans, je suis passionné par le développement web,
                    l'UI/UX et l'accessibilité depuis 9 ans.</p>
                <Link to='/contact'>
                    <button>Me contacter</button>
                </Link>
            </div>
        </div>
    )

}

export default NameJob
