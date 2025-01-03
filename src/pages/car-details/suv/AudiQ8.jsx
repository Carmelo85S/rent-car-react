import AudiQ8_hero from '../../../assets/suv/audiq8/audi-q8-road.webp';
import FormBooking from '../../../components/FormBooking';
import Title from '../../../components/Title';

import '../../../style/car-details/car-details.css'

const AudiQ8 = () => {
  return (
    <>
        <div className='wrapper'>
            <section className="title-container">
                <Title title="Audi Q8" />
            </section>
            <section className="hero-details">
            <section className="info-container">
                <p className="info">
                Discover the perfect fusion of performance, luxury, and cutting-edge technology with the Audi Q8, 
                an SUV that redefines what it means to drive in style. Powered by a 3.0L V6 engine, the Q8 produces 
                an impressive 335 horsepower, accelerating from 0 to 100 km/h in just 5.6 seconds. With its dynamic 
                handling, Quattro all-wheel drive, and sophisticated design, the Audi Q8 offers an exceptional 
                driving experience that combines power, comfort, and versatility. 
                Inside, the Q8 boasts a high-tech interior, featuring dual touchscreen displays, advanced safety features, 
                and luxurious materials, making every drive a first-class experience. 
                Embrace the road ahead—rent the Audi Q8 and enjoy the perfect balance of performance and luxury that 
                this remarkable vehicle has to offer.
                </p>
            </section>
                <section className="img-container">
                    <img src={AudiQ8_hero} alt="audi q8 on the road" />
                </section>
            </section> 
        </div>
        <section className="img-info-wrapper">
            <section className="car-spec-container">
                <section className="info-container">
                <h3>Key Specifications</h3>
                    <ul>
                        <li><strong>Engine:</strong> 3.0L V6 Turbocharged</li>
                        <li><strong>Horsepower:</strong> 335 hp</li>
                        <li><strong>0-100 km/h:</strong> 5.6 seconds</li>
                        <li><strong>Transmission:</strong> 8-speed automatic</li>
                        <li><strong>Top Speed:</strong> 250 km/h</li>
                        <li><strong>Price:</strong> Approximately £70,000</li>
                    </ul>
                </section>
            </section>
        </section>

        <section className="video-container">
            <div className="video-wrapper">
                <iframe 
                    src="https://www.youtube.com/embed/EumwiVEVZMw" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    title="Audi Q8 Video"
                ></iframe>
            </div>
            <section className="cta-container">
                <h2>Ready to Experience Audi Q8?</h2>
            </section>
        </section>

        <FormBooking />

        <section className="cta-section">
            <h3>Don't Miss Out on the Audi Q8 Experience!</h3>
            <p>Book now to secure your Audi Q8 for your next adventure. Availability is limited!</p>
        </section>
    </>
  )
}

export default AudiQ8
