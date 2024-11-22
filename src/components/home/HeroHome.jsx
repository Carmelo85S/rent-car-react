import { Link } from 'react-router-dom';
import Performance from '../../assets/home/performance.webp';
import Cabriolet from '../../assets/home/cabriolet.webp';
import Suv from '../../assets/home/suv.webp';
import Sedan from '../../assets/home/sedan.webp';
import '../../style/home/hero/hero.css';

const HeroHome = () => {
    return(
        <div className="home-hero-wrapper">
            <section className="home-hero-container">
                <h1 className="home-title slide-in-title">
                    IGNITE YOUR SENSES
                </h1>
                <p className="home-info slide-in-info">
                    At RideReady, we believe in making every journey an unforgettable experience. 
                    Whether you're cruising through the city or embarking on a weekend adventure, 
                    our wide range of vehicles ensures you'll find the perfect ride.
                    With easy online booking and flexible rental options, you're just a few clicks 
                    away from hitting the road in style.
                </p>
            </section>
            <section className="car-category-container">
                <Link to="/performance"><img className="fade-in" src={Performance} alt="sport car category" /></Link>
                <Link to="/cabriolet"><img className="fade-in" src={Cabriolet} alt="cabriolet car category" /></Link>
                <Link to="suv"><img className="fade-in" src={Suv} alt="suv car category" /></Link>
                <Link to="sedan"><img className="fade-in" src={Sedan} alt="sadan car category" /></Link>
            </section>
        </div>
    )
}

export default HeroHome;