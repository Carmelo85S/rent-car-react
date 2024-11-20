import { Link } from 'react-router-dom';
import '../style/navbar/navbar.css';

const Navbar = () => {
    return(
        <div className = "header">
            <nav className="navigation">
            <h3 className="logo">Ready<span>Ride</span></h3>
                <ul className="list-container">
                    <li>
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li>
                        <Link className="link" to="/">ABOUT US</Link>
                    </li>
                    <li className='dropdown'>
                        <Link className="dropbtn" to="/">VEHICLE</Link>
                        <ul class="dropdown-content">
                            <li>
                                <Link className="droplink" to="/cabriolet">CABRIOLET</Link>
                            </li>
                            <li>
                                <Link className="droplink" to="/performance">PERFORMANCE</Link>
                            </li>
                            <li>
                                <Link className="droplink" to="/suv">SUV</Link>
                            </li>
                            <li>
                                <Link className="droplink" to="/sedan">SEDAN</Link>
                            </li>
                        </ul>
                    </li>
                    <li className='dropdown'>
                        <Link className="dropbtn" to="/">SERVICE</Link>
                        <ul class="dropdown-content-service">
                            <li>
                                <Link className="droplink" to="/">MONTHLY SUB</Link></li>
                            <li>
                                <Link className="droplink" to="/">CHAFFEAUR</Link></li>
                            <li>
                                <Link className="droplink" to="/">PRIVATE LOUNGE</Link></li>
                            <li>
                                <Link className="droplink" to="/">LONG TERM</Link></li>
                            <li>
                                <Link className="droplink" to="/">SHORT TERM</Link></li>
                            <li>
                                <Link className="droplink" to="/">WEDDING CAR</Link></li>
                            <li>
                                <Link className="droplink" to="/">DRIVING TOUR</Link></li>
                            <li>
                                <Link className="droplink" to="/">SPEED DRIVE</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link className="link" to="/">CONTACT</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;