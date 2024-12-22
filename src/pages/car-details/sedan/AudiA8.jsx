import AudiA8_hero from '../../../assets/sedan/audi-a8/audi-a8-hero.webp';
import FormBooking from '../../../components/FormBooking';
import Title from '../../../components/Title';
import AudiA8_1 from '../../../assets/sedan/audi-a8/audi-a8-front-intern.webp';
import AudiA8_2 from '../../../assets/sedan/audi-a8/audi-a8-back-interior-display.webp';
import AudiA8_3 from '../../../assets/sedan/audi-a8/audi-a8-back-interior-seat.webp';
import AudiA8_4 from '../../../assets/sedan/audi-a8/audi-a8-back.webp';

import '../../../style/car-details/car-details.css'

const AudiA8 = () => {
  return (
    <>
        <div className='wrapper'>
            <section className="title-container">
                <Title title="Audi A8" />
            </section>
            <section className="hero-details">
            <section className="info-container">
            <p className="info">
                Discover the epitome of luxury and innovation with the Audi A8, a flagship sedan that redefines premium driving 
                experiences. Powered by a refined 3.0L V6 engine with mild-hybrid technology, the A8 delivers an impressive 335 
                horsepower, ensuring smooth and dynamic performance. With its advanced Quattro all-wheel drive system and adaptive 
                air suspension, the A8 glides effortlessly across any terrain, offering unparalleled comfort and control.
                Inside, the Audi A8 sets a new standard for luxury, featuring a meticulously crafted interior with Valcona leather 
                seats, ambient lighting, and a state-of-the-art MMI touch response system. Cutting-edge driver assistance features 
                and a Bang & Olufsen 3D sound system further elevate every journey.
                Redefine sophistication—rent the Audi A8 and experience a harmonious blend of elegance, innovation, and performance 
                that only Audi can deliver.
            </p>
            </section>
                <section className="img-container">
                    <img src={AudiA8_hero} alt="audi a8 on the road" />
                </section>
            </section> 
        </div>
        <section className="img-info-wrapper">
            <section className="car-spec-container">
                <section className="img-container">
                    <img src={AudiA8_1} alt="audi a8 front interior" />
                    <img src={AudiA8_2} alt="audi a8 back interior display" />
                    <img src={AudiA8_3} alt="audi a8 back interior seats" />
                    <img src={AudiA8_4} alt="audi a8 back view" />
                </section>
                <section className="info-container">
                <h3>Key Specifications</h3>
                    <ul>
                        <li><strong>Engine:</strong> 3.0L V6 with Mild-Hybrid Technology</li>
                        <li><strong>Horsepower:</strong> 335 hp</li>
                        <li><strong>0-100 km/h:</strong> 5.6 seconds</li>
                        <li><strong>Transmission:</strong> 8-speed automatic</li>
                        <li><strong>Top Speed:</strong> 250 km/h</li>
                        <li><strong>Price:</strong> Approximately $90,000</li>
                    </ul>
                </section>
            </section>
        </section>

        <section className="video-container">
            <div className="video-wrapper">
                <iframe 
                    src="https://www.youtube.com/embed/y5Ii8H0zutc" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    title="Audi A8 Video"
                ></iframe>
            </div>
            <section className="cta-container">
                <h2>Ready to Experience Audi A8?</h2>
            </section>
        </section>

        <FormBooking />

        <section className="cta-section">
            <h3>Don't Miss Out on the Audi A8 Experience!</h3>
            <p>Book now to secure your Audi A8 for your next adventure. Availability is limited!</p>
        </section>
    </>
  )
}

export default AudiA8
