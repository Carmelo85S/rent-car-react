import AstonVanquish from '../../../assets/performance/aston/aston-vanquish.webp';
import FormBooking from '../../../components/FormBooking';
import Title from '../../../components/Title';
import Aston1 from '../../../assets/cabriolet/aston-martin/aston-martin-booking-intern-front.webp';
import Aston2 from '../../../assets/cabriolet/aston-martin/aston-martin-booking-intern.webp';
import Aston3 from '../../../assets/cabriolet/aston-martin/aston-martin-booking-seat.webp';
import Aston4 from '../../../assets/cabriolet/aston-martin/aston-martin-booking.webp';

import '../../../style/car-details/car-details.css'

const MercedesG = () => {
  return (
    <>
    <div className='wrapper'>
        <section className="title-container">
            <Title title="Mercedes G" />
        </section>
        <section className="hero-details">
        <section className="info-container">
            <p className="info">
            Experience the perfect blend of rugged strength and luxury with the Mercedes-Benz G-Class, 
            an iconic SUV that commands attention wherever it goes. Powered by a 4.0L V8 biturbo engine, the G-Class 
            delivers an impressive 416 horsepower, accelerating from 0 to 100 km/h in just 5.9 seconds. Its advanced 
            all-wheel-drive system, combined with superior off-road capabilities and dynamic handling, ensures 
            unmatched performance in both urban environments and challenging terrains. 
            Inside, the G-Class offers a cabin that exudes sophistication, featuring premium leather upholstery, 
            cutting-edge technology, and an array of luxurious amenities that make every ride extraordinary. 
            Elevate your adventure—rent the Mercedes-Benz G-Class and enjoy the ultimate in power, luxury, and 
            performance.
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
                src="https://www.youtube.com/embed/DQrpqEddiyc" 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                title="Mercedes class G Video"
            ></iframe>
        </div>
        <section className="cta-container">
            <h2>Ready to Experience Mercedes class G?</h2>
        </section>
    </section>

    <FormBooking />

    <section className="cta-section">
        <h3>Don't Miss Out on the Mercedes class G Experience!</h3>
        <p>Book now to secure your Mercedes class G for your next adventure. Availability is limited!</p>
    </section>
    </>
  )
}

export default MercedesG
