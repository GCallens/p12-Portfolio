import './contact.scss'
import logo from "../../assets/logo.png";

function Contact() {

    return (
        <div className="contact">
            <div className='leftSide'>
                <h1>Contact</h1>
                <h3>Vous avez un projet ? <br/> Discutons-en !</h3>
                <div className='footerTwo'>
                    <a href='https://gaetancallens.com/'>
                        <img src={logo} alt={'Callens Entreprise'}/>
                    </a>
                </div>
            </div>
            <div className='line'>
            </div>
            <div className='rightSide'>
                <form name="contact" method="post">
                    <div className='name'>
                        <div className='name_name'>
                            <label htmlFor="name"></label>
                            <input type="text" name="name" placeholder='Nom' required />
                        </div>
                        <div className='name_surname'>
                            <label htmlFor="surname"></label>
                            <input type="text" name="surname" placeholder='Prénom' required />
                        </div>
                    </div>
                    <div className='email'>
                        <label htmlFor="email"></label>
                        <input type="email" name="email" placeholder='Email' required />
                    </div>
                    <div className='subject'>
                        <label htmlFor="sujet"></label>
                        <input type="sujet" name="sujet" placeholder='Objet' required />
                    </div>
                    <div className='message'>
                        <label htmlFor="message"></label>
                        <textarea type="text" name="message" placeholder='Message' required />
                    </div>
                    <div className='btn'>
                        <button type="submit">Envoyer</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
