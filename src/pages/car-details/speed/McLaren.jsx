import MclarenHero from '../../../assets/speed/mclaren/mclaren-720S.webp';
import FormBooking from '../../../components/FormBooking';
import Title from '../../../components/Title';
import McLaren_1 from '../../../assets/speed/mclaren/mclaren-720S-intern-front.webp';
import McLaren_2 from '../../../assets/speed/mclaren/mclaren-720S-seat.webp';
import McLaren_3 from '../../../assets/speed/mclaren/mclaren-720S-wheel.webp';
import McLaren_4 from '../../../assets/speed/mclaren/mclaren-720S-back.webp';

import '../../../style/car-details/car-details.css'

const McLaren = () => {
  return (
    <>
    <div className='wrapper'>
        <section className="title-container">
            <Title title="Mc Laren 720S" />
        </section>
        <section className="hero-details">
            <section className="info-container">
                <p className="info">
                Experience the pinnacle of British automotive excellence with the McLaren 720S, 
                a masterpiece that seamlessly combines power and elegance. This supercar is equipped 
                with a formidable 4.0L twin-turbocharged V8 engine, delivering an exhilarating 710 horsepower,
                 propelling you from 0 to 100 km/h in just 2.8 seconds. The 720S offers a harmonious blend of 
                 high-performance engineering and luxurious craftsmanship, ensuring a driving experience that 
                 is both thrilling and refined.
                Elevate your journey—rent the McLaren 720S and indulge in the unparalleled luxury and excitement 
                that this exceptional vehicle provides.
                </p>
            </section>
            <section className="img-container">
                <img src={MclarenHero} alt="A mclaren on the road" />
            </section>
        </section> 
    </div>
    <section className="img-info-wrapper">
        <section className="car-spec-container">
            <section className="img-container">
                <img src={McLaren_1} alt="Mc Laren front interior" />
                <img src={McLaren_2} alt="Mc Laren fron nterior yellow" />
                <img src={McLaren_3} alt="Mc Laren back view" />
                <img src={McLaren_4} alt="Mc Laren top view" />
            </section>
            <section className="info-container">
            <h3>Key Specifications</h3>
            <ul>
                <li><strong>Engine:</strong> 4.0L Twin-Turbocharged V8</li>
                <li><strong>Horsepower:</strong> 710 hp</li>
                <li><strong>0-100 km/h:</strong> 2.8 seconds</li>
                <li><strong>Transmission:</strong> 7-speed dual-clutch automatic</li>
                <li><strong>Top Speed:</strong> 341 km/h</li>
                <li><strong>Price:</strong> Approximately $310,984</li>
            </ul>
            </section>
        </section>
    </section>

    <section className="video-container">
        <div className="video-wrapper">
            <iframe 
                src="https://www.youtube.com/embed/TUVMyxAcRis" 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                title="Mc Laren 720S Video"
            ></iframe>
        </div>
        <section className="cta-container">
            <h2>Ready to Experience Mc Laren 720S?</h2>
        </section>
    </section>

    <FormBooking />

    <section className="cta-section">
        <h3>Don't Miss Out on the Mc Laren 720S Experience!</h3>
        <p>Book now to secure your Mc Laren 720S for your next adventure. Availability is limited!</p>
    </section>
    </>
  )
}

export default McLaren
