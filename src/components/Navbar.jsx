import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { NavbarContext } from '../pages/ColorPicker';
import '../style/navbar/navbar.css';

const Navbar = () => {

    // Using the useContext hook to access the current navbar background color 
    // from the NavbarContext, which was provided by the ColorPicker component
    const navbar = useContext(NavbarContext);

    return(
        // The 'header' div is given a dynamic background color that comes from the 'navbar' value in the context
        // This allows the background color of the Navbar to change based on the user's selection in the ColorPicker component
        <div className = "header" style={{ backgroundColor: navbar }}>


            <nav className="navigation">
            <h3 className="logo">Ride<span>Ready</span></h3>
                <ul className="list-container">
                    <li>
                        <Link className="link" to="/test">COUNTER</Link>
                    </li>
                    <li>
                        <Link className="link" to="/color-picker">PICK</Link>
                    </li>
                    <li>
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li>
                        <Link className="link" to="/about">ABOUT US</Link>
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
                                <Link className="droplink" to="/chauffeur">CHAFFEAUR</Link></li>
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