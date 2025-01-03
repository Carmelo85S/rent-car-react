import MercedesShero from '../../../assets/sedan/mercedes-class-s/mercedes-class-s-hero.webp';
import FormBooking from '../../../components/FormBooking';
import Title from '../../../components/Title';
import '../../../style/car-details/car-details.css'

const MercedesClassS = () => {
  return (
    <>
    <div className='wrapper'>
        <section className="title-container">
            <Title title="Mercedes class s" />
        </section>
        <section className="hero-details">
            <section className="info-container">
                <p className="info">
                    Experience the epitome of automotive luxury and sophistication with the Mercedes-Benz S-Class, a sedan 
                    that defines modern elegance and cutting-edge innovation. Equipped with a powerful 3.0L inline-6 turbocharged 
                    engine with EQ Boost, the S-Class delivers an impressive 429 horsepower, offering seamless performance and 
                    unrivaled refinement. Its advanced suspension system, 4MATIC all-wheel drive, and dynamic handling ensure 
                    a smooth and commanding ride, whether cruising on highways or navigating urban streets.
                    Inside, the S-Class exudes opulence with its hand-crafted leather seating, ambient lighting, and a 
                    state-of-the-art MBUX infotainment system. Features like the Executive Rear Seat Package and Burmester 
                    4D surround sound system provide unmatched comfort and entertainment. 
                    Elevate your travel experience—rent the Mercedes-Benz S-Class and indulge in unparalleled luxury, 
                    sophistication, and driving pleasure.
                </p>
            </section>
            <section className="img-container">
                <img src={MercedesShero} alt="Black mercedes class S" />
            </section>
        </section> 
    </div>
    <section className="img-info-wrapper">
        <section className="car-spec-container">
            <section className="info-container">
            <h3>Key Specifications</h3>
                <ul>
                    <li><strong>Engine:</strong> 3.0L Inline-6 Turbocharged with EQ Boost</li>
                    <li><strong>Horsepower:</strong> 429 hp</li>
                    <li><strong>0-100 km/h:</strong> 4.9 seconds</li>
                    <li><strong>Transmission:</strong> 9-speed automatic</li>
                    <li><strong>Top Speed:</strong> 250 km/h</li>
                    <li><strong>Price:</strong> Approximately $115,000</li>
                </ul>
            </section>
        </section>
    </section>

    <section className="video-container">
        <div className="video-wrapper">
            <iframe 
                src="https://www.youtube.com/embed/BEPKYHGULhI" 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                title="Mercedes class S Video"
            ></iframe>
        </div>
        <section className="cta-container">
            <h2>Ready to Experience Mercedes class S?</h2>
        </section>
    </section>

    <FormBooking />

    <section className="cta-section">
        <h3>Don't Miss Out on the Mercedes class S Experience!</h3>
        <p>Book now to secure your Mercedes class S for your next adventure. Availability is limited!</p>
    </section>
    </>
  )
}

export default MercedesClassS
