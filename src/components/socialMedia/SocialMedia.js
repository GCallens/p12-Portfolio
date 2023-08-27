import './socialMedia.scss'
import {Link} from "react-router-dom";
import gitHubLogo from '../../assets/githubLogo.png'
import twitterLogo from '../../assets/twitterLogo.png'
import linkedInLogo from '../../assets/linkedinLogo.png'

function SocialMedia() {

    return (
        <ul className='socialMedia'>
            <li>
                <Link target="_blank" to='https://github.com/GCallens'>
                    <img className='socialMedia_logo' src={gitHubLogo}/>
                </Link>
            </li>

            <li>
                <Link target="_blank" to='https://twitter.com/GaetanCall'>
                    <img className='socialMedia_logo' src={twitterLogo}/>
                </Link>
            </li>

            <li>
                <Link target="_blank" to='https://www.linkedin.com/in/gaetan-callens-707a82b1/'>
                    <img className='socialMedia_logo' src={linkedInLogo}/>
                </Link>
            </li>
        </ul>
    )
}

export default SocialMedia
