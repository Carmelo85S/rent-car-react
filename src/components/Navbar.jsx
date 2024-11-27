import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { NavbarContext } from '../pages/ColorPicker';
import '../style/navbar/navbar.css';

const Navbar = () => {
    // Using the useContext hook to access the current navbar background color 
    const navbar = useContext(NavbarContext);

    return (
        // The 'header' div is given a dynamic background color from the 'navbar' value
        <div className="header" style={{ backgroundColor: navbar }}>
            <nav className="navigation">
                <h3 className="logo">Ride<span>Ready</span></h3>
                <ul className="list-container">
                    {/* Main Dropdown */}
                    <li className='dropdown'>
                        <Link className="dropbtn" to="#">TOOLS</Link>
                        <ul className="dropdown-content">
                            <li>
                                <Link className="droplink" to="/test">COUNTER</Link>
                            </li>
                            <li>
                                <Link className="droplink" to="/color-picker">PICKER</Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li>
                        <Link className="link" to="/about">ABOUT US</Link>
                    </li>
                    
                    {/* Vehicles Dropdown */}
                    <li className='dropdown'>
                        <Link className="dropbtn" to="/">VEHICLE</Link>
                        <ul className="dropdown-content">
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
                    
                    {/* Services Dropdown */}
                    <li className='dropdown'>
                        <Link className="dropbtn" to="/">SERVICE</Link>
                        <ul className="dropdown-content-service">
                            <li>
                                <Link className="droplink" to="/monthly-sub">MONTHLY SUB</Link>
                            </li>
                            <li>
                                <Link className="droplink" to="/chauffeur">CHAUFFEUR</Link>
                            </li>
                            <li>
                                <Link className="droplink" to="/private-lounge">PRIVATE LOUNGE</Link>
                            </li>
                            <li>
                                <Link className="droplink" to="/long-term">LONG TERM</Link>
                            </li>
                            <li>
                                <Link className="droplink" to="/short-term">SHORT TERM</Link>
                            </li>
                            <li>
                                <Link className="droplink" to="/wedding">WEDDING CAR</Link>
                            </li>
                            <li>
                                <Link className="droplink" to="/driving-tour">DRIVING TOUR</Link>
                            </li>
                            <li>
                                <Link className="droplink" to="/speed-drive">SPEED DRIVE</Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link className="link" to="/contact-info">CONTACT</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
