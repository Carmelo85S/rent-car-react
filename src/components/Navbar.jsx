import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../style/navbar/navbar.css';

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const closeNav = () => {
        setIsNavOpen(false);
    };

    return (
        <div className="header">
            <nav className={`navigation ${isNavOpen ? 'open' : ''}`}>
                <section className="logo-button">
                    <h3 className="logo">Ride<span>Ready</span></h3>
                    <button className={`nav-toggle ${isNavOpen ? 'active' : ''}`}
                            onClick={toggleNav}
                    >
                        <h3>R<i><span>R</span></i></h3>
                    </button>
                </section>
                
                <ul className={`list-container ${isNavOpen ? 'show' : ''}`}>
                    {/* Main Dropdown */}
                    <li>
                        <Link className="link" to="/" onClick={closeNav}>HOME</Link>
                    </li>
                    <li>
                        <Link className="link" to="/about" onClick={closeNav}>ABOUT US</Link>
                    </li>
                    
                    {/* Vehicles Dropdown */}
                    <li className='dropdown'>
                        <Link className="dropbtn" to="/vehicle" onClick={closeNav}>VEHICLE</Link>
                        <ul className="dropdown-content-vehicle">
                            <li>
                                <Link className="droplink" to="/cabriolet" onClick={closeNav}>CABRIOLET</Link>
                            </li>
                            <li>
                                <Link className="droplink" to="/speed" onClick={closeNav}>SPEED</Link>
                            </li>
                            <li>
                                <Link className="droplink" to="/suv" onClick={closeNav}>SUV</Link>
                            </li>
                            <li>
                                <Link className="droplink" to="/sedan" onClick={closeNav}>SEDAN</Link>
                            </li>
                        </ul>
                    </li>
                    
                    {/* Services Dropdown */}
                    <li className='dropdown'>
                        <Link className="dropbtn" to="/service" onClick={closeNav}>SERVICE</Link>
                        <ul className="dropdown-content-service">
                            <li>
                                <Link className="droplink" to="/monthly-sub" onClick={closeNav}>MONTHLY SUB</Link>
                            </li>
                            <li>
                                <Link className="droplink" to="/chauffeur" onClick={closeNav}>CHAUFFEUR</Link>
                            </li>
                            <li>
                                <Link className="droplink" to="/private-lounge" onClick={closeNav}>PRIVATE LOUNGE</Link>
                            </li>
                            <li>
                                <Link className="droplink" to="/long-term" onClick={closeNav}>LONG TERM</Link>
                            </li>
                            <li>
                                <Link className="droplink" to="/short-term" onClick={closeNav}>SHORT TERM</Link>
                            </li>
                            <li>
                                <Link className="droplink" to="/wedding" onClick={closeNav}>WEDDING CAR</Link>
                            </li>
                            <li>
                                <Link className="droplink" to="/driving-tour" onClick={closeNav}>DRIVING TOUR</Link>
                            </li>
                            <li>
                                <Link className="droplink" to="/speed-drive" onClick={closeNav}>SPEED DRIVE</Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link className="link" to="/contact-info" onClick={closeNav}>CONTACT</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
