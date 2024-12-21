import AstonVanquish from '../../../assets/performance/aston/aston-vanquish.webp';
import FormBooking from '../../../components/FormBooking';
import Title from '../../../components/Title';
import Aston1 from '../../../assets/cabriolet/aston-martin/aston-martin-booking-intern-front.webp';
import Aston2 from '../../../assets/cabriolet/aston-martin/aston-martin-booking-intern.webp';
import Aston3 from '../../../assets/cabriolet/aston-martin/aston-martin-booking-seat.webp';
import Aston4 from '../../../assets/cabriolet/aston-martin/aston-martin-booking.webp';

import '../../../style/car-details/car-details.css'

const CadillacEscalade = () => {
  return (
    <>
    <div className='wrapper'>
        <section className="title-container">
            <Title title="Cadillac Escalade" />
        </section>
        <section className="hero-details">
        <section className="info-container">
            <p className="info">
            Step into the world of luxury and power with the Cadillac Escalade, a full-size SUV that offers 
            unmatched performance and refinement. Equipped with a 6.2L V8 engine, the Escalade delivers a robust 
            420 horsepower, accelerating from 0 to 100 km/h in just 6.1 seconds. With its sophisticated four-wheel 
            drive system and magnetic ride control, the Escalade offers a smooth and commanding driving experience, 
            whether navigating city streets or tackling rugged terrains. 
            Inside, the Escalade offers an opulent cabin with premium leather seating, advanced entertainment systems, 
            and cutting-edge technology, ensuring that every ride is a first-class experience. 
            Embrace the road ahead—rent the Cadillac Escalade and experience the perfect combination of power, luxury, 
            and versatility in one remarkable vehicle.
            </p>
        </section>
            <section className="img-container">
                <img src={AstonVanquish} alt="Black Aston martin Vansquish on the road" />
            </section>
        </section> 
    </div>
    <section className="img-info-wrapper">
        <section className="car-spec-container">
            <section className="img-container">
                <img src={Aston1} alt="intern front seat" />
                <img src={Aston2} alt="interior screen" />
                <img src={Aston3} alt="seat" />
                <img src={Aston4} alt="top view" />
            </section>
            <section className="info-container">
            <h3>Key Specifications</h3>
                <ul>
                    <li><strong>Engine:</strong> 5.2L V12 Twin-Turbocharged</li>
                    <li><strong>Horsepower:</strong> 824 hp</li>
                    <li><strong>0-100 km/h:</strong> 3.2 seconds</li>
                    <li><strong>Transmission:</strong> 8-speed automatic</li>
                    <li><strong>Top Speed:</strong> 344 km/h</li>
                    <li><strong>Price:</strong> Approximately £300,000</li>
                </ul>
            </section>
        </section>
    </section>

    <section className="video-container">
        <div className="video-wrapper">
            <iframe 
                src="https://www.youtube.com/embed/tBSoTRn6JFw" 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                title="Cadillac Escalade Video"
            ></iframe>
        </div>
        <section className="cta-container">
            <h2>Ready to Experience Cadillac Escalade?</h2>
        </section>
    </section>

    <FormBooking />

    <section className="cta-section">
        <h3>Don't Miss Out on the Cadillac Escalade Experience!</h3>
        <p>Book now to secure your Cadillac Escalade for your next adventure. Availability is limited!</p>
    </section>
    </>
  )
}

export default CadillacEscalade
