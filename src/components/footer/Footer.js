import './footer.scss'
import logo from '../../assets/logo.png'

function Footer() {

    return (
        <footer>

            <div className='footerOne'>
                <p>
                    Designed & Developed by <a href='https://gaetancallens.com/'>Gaetan Callens</a>.
                    Designed on <a href='https://www.apple.com/fr/ipad-pro/' target='_blank' >iPad</a> and coded
                    in <a href='https://www.jetbrains.com/fr-fr/webstorm/' target='_blank'>Webstorm</a>.
                    Built with <a href='https://fr.legacy.reactjs.org/' target='_blank'>React</a> and <a href='https://sass-lang.com/' target='_blank'>SASS</a>, deployed
                    with <a href='https://www.netlify.com/' target='_blank'>Netlify</a>.
                </p>
            </div>

            <div className='footerTwo'>
                <a href='https://gaetancallens.com/'>
                    <img src={logo} alt={'Callens Entreprise'}/>
                </a>
            </div>

        </footer>
    )

}

export default Footer
