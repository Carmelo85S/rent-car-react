import BmwS7_hero from '../../../assets/sedan/bmw-s7/bmw-s7-hero.webp';
import FormBooking from '../../../components/FormBooking';
import Title from '../../../components/Title';
import BmwS7_1 from '../../../assets/sedan/bmw-s7/bmw-s7-back-seat.webp';
import BmwS7_2 from '../../../assets/sedan/bmw-s7/bmw-s7-front.webp';
import BmwS7_3 from '../../../assets/sedan/bmw-s7/bmw-s7-front-interior.webp';
import BmwS7_4 from '../../../assets/sedan/bmw-s7/bmw-s7-front.webp';

import '../../../style/car-details/car-details.css'

const BmwS7 = () => {
  return (
    <>
    <div className='wrapper'>
        <section className="title-container">
            <Title title="Bmw S7" />
        </section>
        <section className="hero-details">
        <section className="info-container">
            <p className="info">
                Immerse yourself in the ultimate luxury and advanced technology with the BMW 7 Series, a sedan that sets the 
                standard for sophistication and performance. Powered by a 3.0L Inline-6 engine with Mild-Hybrid Technology, 
                the BMW 740i produces a smooth 375 horsepower, accelerating from 0 to 100 km/h in just 5.4 seconds. The 7 Series 
                offers a serene yet dynamic driving experience, combining rear-wheel drive with innovative chassis systems for 
                unparalleled precision and comfort. 
                Inside, the BMW 7 Series pampers you with opulent materials, cutting-edge infotainment, and a range of advanced 
                safety features. Its spacious interior, customizable ambient lighting, and Executive Lounge seating options 
                ensure a first-class experience for both driver and passengers. 
                Discover the epitome of automotive excellence—rent the BMW 7 Series and redefine what it means to drive in luxury.
            </p>
        </section>
            <section className="img-container">
                <img src={BmwS7_hero} alt="Bmw s7 parked in fron of a garden with palm" />
            </section>
        </section> 
    </div>
    <section className="img-info-wrapper">
        <section className="car-spec-container">
            <section className="img-container">
                <img src={BmwS7_1} alt="bmw s7 drive" />
                <img src={BmwS7_2} alt="bmw s7 front back view" />
                <img src={BmwS7_3} alt="bmw s7 front interior" />
                <img src={BmwS7_4} alt="bmw s7 front view" />
            </section>
            <section className="info-container">
            <h3>Key Specifications</h3>
                <ul>
                    <li><strong>Engine:</strong> 3.0L Inline-6 Turbocharged with Mild-Hybrid Technology</li>
                    <li><strong>Horsepower:</strong> 375 hp</li>
                    <li><strong>0-100 km/h:</strong> 5.4 seconds</li>
                    <li><strong>Transmission:</strong> 8-speed automatic</li>
                    <li><strong>Top Speed:</strong> 250 km/h</li>
                    <li><strong>Price:</strong> Approximately $94,000</li>
                </ul>
            </section>
        </section>
    </section>

    <section className="video-container">
        <div className="video-wrapper">
            <iframe 
                src="https://www.youtube.com/embed/o8SDQ29-wfE" 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                title="Bmw S7 Video"
            ></iframe>
        </div>
        <section className="cta-container">
            <h2>Ready to Experience Bmw S7?</h2>
        </section>
    </section>

    <FormBooking />

    <section className="cta-section">
        <h3>Don't Miss Out on the Bmw S7!</h3>
        <p>Book now to secure your Bmw S7 for your next adventure. Availability is limited!</p>
    </section>
    </>
  )
}

export default BmwS7
