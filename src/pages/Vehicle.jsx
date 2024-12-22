import { Link } from "react-router-dom";
import Speed from '../assets/home/speed.webp';
import Cabriolet from '../assets/home/cabriolet.webp';
import Suv from '../assets/home/suv.webp';
import Sedan from '../assets/home/sedan.webp';
import '../style/vehicle/vehicle.css';


const Vehicle = () => {
  return (
    <div>
        <section className="car-category-wrapper">
            <h1 className="car-category-heading">Explore Our Vehicle</h1>
            <section className="car-category-container">
                <Link to="/speed"><img src={Speed} alt="sport car category" /></Link>
                <Link to="/cabriolet"><img src={Cabriolet} alt="cabriolet car category" /></Link>
                <Link to="/suv"><img src={Suv} alt="suv car category" /></Link>
                <Link to="/sedan"><img src={Sedan} alt="sadan car category" /></Link>
            </section>
        </section>
    </div>
  )
}

export default Vehicle
