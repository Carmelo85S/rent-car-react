import '../style/navbar/navbar.css';

const Navbar = () => {
    return(
        <div className = "header">
            <h2 className="logo">Ready<span>Ride</span></h2>
            <nav className="navigation">
                <ul className="list">
                    <li><a href="#">LINK</a></li>
                    <li><a href="#">LINK</a></li>
                    <li><a href="#">LINK</a></li>
                    <li><a href="#">LINK</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;