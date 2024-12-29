import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faCar, faUser } from '@fortawesome/free-solid-svg-icons';
import Footer from '../assets/footer/text.png';
import '../style/footer/footer.css';

const FooterComp= () => {
    return(
        <div className="footer-wrapper">
            <img src={Footer} alt="text logo" className="img-logo" />
            <h4 className="footer-cit">Ignite your senses</h4>
            <footer className="footer-container">
                <section className="list-container">
                    <a href="https://www.linkedin.com/in/carmelo-salis-7726ba298/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="link" icon={faLinkedin} size="2x" />
                    </a>
                    <a href="https://github.com/Carmelo85S?tab=repositories" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="link" icon={faGithub} size="2x" />
                    </a>
                    <a href="mailto:carmelo.salis85@gmail.com">
                        <FontAwesomeIcon className="link" icon={faEnvelope} size="2x" />
                    </a>
                    <Link to="/">
                        <FontAwesomeIcon className="link" icon={faCar} size="2x" />
                    </Link>
                </section>
            </footer>
        </div>
    )
}

export default FooterComp;
