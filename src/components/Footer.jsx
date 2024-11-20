import { Link } from 'react-router-dom';
import Footer from '../assets/footer/text.png';
import '../style/footer/footer.css';

const FooterComp= () => {
    return(
        <div className="footer-wrapper">
            <img src={Footer} alt="text logo" className="img-logo" />
            <footer className="footer-container">
                <ul className="list-container">
                    <li>
                        <Link className="link" to="/">ABOUT US</Link>
                    </li>
                    <li>
                        <Link className="link" to="/">SERVICES</Link>
                    </li>
                    <li>
                        <Link className="link" to="/">OUR FLEET</Link>
                    </li>
                    <li>
                        <Link className="link" to="/">CONTACT</Link>
                    </li>    
                </ul>
                <ul className="list-container">
                    <li>
                        <Link className="link" to="/">PRIVACY POLICY</Link>
                    </li>
                    <li>
                        <Link className="link" to="/">TERMS AND CONDITION</Link>
                    </li>
                    <li>
                        <Link className="link" to="/">FAQ</Link>
                    </li>
                    <li>
                        <Link className="link" to="/">SUPPORT</Link>
                    </li>    
                </ul>
                <ul className="list-container">
                    <li>
                        <Link className="link" to="/">FEEDBACK</Link>
                    </li>
                    <li>
                        <Link className="link" to="/">MOST WANTED</Link>
                    </li>
                    <li>
                        <Link className="link" to="/">CAREER</Link>
                    </li>
                    <li>
                        <Link className="link" to="/">FIND US</Link>
                    </li>    
                </ul>
            </footer>
        </div>
    )
}

export default FooterComp;
