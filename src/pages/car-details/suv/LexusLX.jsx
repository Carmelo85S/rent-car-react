import AstonVanquish from '../../../assets/performance/aston/aston-vanquish.webp';
import FormBooking from '../../../components/FormBooking';
import Title from '../../../components/Title';
import Aston1 from '../../../assets/cabriolet/aston-martin/aston-martin-booking-intern-front.webp';
import Aston2 from '../../../assets/cabriolet/aston-martin/aston-martin-booking-intern.webp';
import Aston3 from '../../../assets/cabriolet/aston-martin/aston-martin-booking-seat.webp';
import Aston4 from '../../../assets/cabriolet/aston-martin/aston-martin-booking.webp';

import '../../../style/car-details/car-details.css'

const LexusLx = () => {
  return (
    <>
    <div className='wrapper'>
        <section className="title-container">
            <Title title="Lexus Lx" />
        </section>
        <section className="hero-details">
        <section className="info-container">
            <p className="info">
            Discover unparalleled luxury and power with the Lexus LX, an exceptional SUV that offers both 
            performance and refinement in every aspect. Powered by a 5.7L V8 engine, the LX delivers a commanding 
            383 horsepower, accelerating from 0 to 100 km/h in just 7.7 seconds. With its advanced full-time 
            four-wheel drive system and adaptive suspension, the Lexus LX is designed to handle both city streets 
            and rugged terrains with ease and confidence. 
            Inside, the LX offers a spacious, opulent cabin with premium leather seating, advanced technology features, 
            and state-of-the-art safety systems, ensuring that every journey is as comfortable and secure as it is thrilling. 
            Elevate your driving experience—rent the Lexus LX and enjoy the perfect combination of strength, luxury, 
            and versatility.
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
                src="https://www.youtube.com/embed/HpTISIsS9qA" 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                title="Lexus Lx Video"
            ></iframe>
        </div>
        <section className="cta-container">
            <h2>Ready to Experience Lexus Lx?</h2>
        </section>
    </section>

    <FormBooking />

    <section className="cta-section">
        <h3>Don't Miss Out on the Lexus Lx Experience!</h3>
        <p>Book now to secure your Lexus Lx for your next adventure. Availability is limited!</p>
    </section>
    </>
  )
}

export default LexusLx
