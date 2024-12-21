import Bmwx7_hero from '../../../assets/suv/bmwx7/bmw-x7-road.webp';
import FormBooking from '../../../components/FormBooking';
import Title from '../../../components/Title';
import Bmwx7_1 from '../../../assets/suv/bmwx7/bmw-x7-drive.webp';
import Bmwx7_2 from '../../../assets/suv/bmwx7/bmw-x7-front-view.webp';
import Bmwx7_3 from '../../../assets/suv/bmwx7/bmw-x7-seat-front.webp';
import Bmwx7_4 from '../../../assets/suv/bmwx7/bmw-x7-seat.webp';

import '../../../style/car-details/car-details.css'

const BmwX7 = () => {
  return (
    <>
    <div className='wrapper'>
        <section className="title-container">
            <Title title="Bmw X7" />
        </section>
        <section className="hero-details">
        <section className="info-container">
            <p className="info">
            Experience the pinnacle of luxury and performance with the BMW X7, an SUV that combines cutting-edge 
            technology with exceptional power. Powered by a 4.4L V8 engine, the X7 delivers an impressive 523 horsepower, 
            accelerating from 0 to 100 km/h in just 4.1 seconds. With its advanced xDrive all-wheel-drive system and air 
            suspension, the X7 offers a dynamic yet smooth driving experience, whether navigating city roads or tackling 
            off-road adventures. 
            Inside, the X7 provides a lavish and spacious cabin with premium leather upholstery, a state-of-the-art 
            infotainment system, and the latest driver-assistance features, ensuring that every journey is as comfortable 
            as it is exhilarating. 
            Elevate your driving experience—rent the BMW X7 and indulge in the perfect combination of power, luxury, 
            and versatility.
            </p>
        </section>
            <section className="img-container">
                <img src={Bmwx7_hero} alt="Bmw x7 on the road" />
            </section>
        </section> 
    </div>
    <section className="img-info-wrapper">
        <section className="car-spec-container">
            <section className="img-container">
                <img src={Bmwx7_1} alt="bmw x7 drive" />
                <img src={Bmwx7_2} alt="bmw x7 front view" />
                <img src={Bmwx7_3} alt="bmw x7 front seat" />
                <img src={Bmwx7_4} alt="bmw x7 seat" />
            </section>
            <section className="info-container">
            <h3>Key Specifications</h3>
                <ul>
                    <li><strong>Engine:</strong> 4.4L V8 Twin-Turbocharged</li>
                    <li><strong>Horsepower:</strong> 523 hp</li>
                    <li><strong>0-100 km/h:</strong> 4.1 seconds</li>
                    <li><strong>Transmission:</strong> 8-speed automatic</li>
                    <li><strong>Top Speed:</strong> 250 km/h</li>
                    <li><strong>Price:</strong> Approximately £80,000</li>
                </ul>
            </section>
        </section>
    </section>

    <section className="video-container">
        <div className="video-wrapper">
            <iframe 
                src="https://www.youtube.com/embed/mTgB4J6u2Wk" 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                title="Bmw X7 Video"
            ></iframe>
        </div>
        <section className="cta-container">
            <h2>Ready to Experience Bmw X7?</h2>
        </section>
    </section>

    <FormBooking />

    <section className="cta-section">
        <h3>Don't Miss Out on the Bmw X7!</h3>
        <p>Book now to secure your Bmw X7 for your next adventure. Availability is limited!</p>
    </section>
    </>
  )
}

export default BmwX7
