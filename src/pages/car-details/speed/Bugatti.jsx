import BugattiHero from '../../../assets/speed/bugatti/bugatti-white.webp';
import FormBooking from '../../../components/FormBooking';
import Title from '../../../components/Title';
import Bugatti_1 from '../../../assets/speed/bugatti/bugatti-stirr-wheel.webp';
import Bugatti_2 from '../../../assets/speed/bugatti/bugatti-intern.webp';
import Bugatti_3 from '../../../assets/speed/bugatti/bugatti-intern-black.webp';
import Bugatti_4 from '../../../assets/speed/bugatti/bugatti-back.webp';

import '../../../style/car-details/car-details.css'

const Bugatti = () => {
  return (
    <>
    <div className='wrapper'>
        <section className="title-container">
            <Title title="Bugatti Chiron" />
        </section>
        <section className="hero-details">
            <section className="info-container">
                <p className="info">
                Experience the epitome of British automotive excellence with the Aston Martin Vanquish, 
                a masterpiece that seamlessly combines power and elegance. This grand tourer is equipped 
                with a formidable 6.0L V12 engine, delivering an exhilarating 568 horsepower, propelling 
                you from 0 to 100 km/h in just 3.6 seconds. The Vanquish offers a harmonious blend of 
                high-performance engineering and luxurious craftsmanship, ensuring a driving experience 
                that is both thrilling and refined.
                Elevate your journey—rent the Aston Martin Vanquish and indulge in the unparalleled 
                luxury and excitement that this exceptional vehicle provides.
                </p>
            </section>
            <section className="img-container">
                <img src={BugattiHero} alt="A white bugatti" />
            </section>
        </section> 
    </div>
    <section className="img-info-wrapper">
        <section className="car-spec-container">
            <section className="img-container">
                <img src={Bugatti_1} alt="Bugatti stirrting wheel" />
                <img src={Bugatti_2} alt="Bugatti interior" />
                <img src={Bugatti_3} alt="Bugatti black interior" />
                <img src={Bugatti_4} alt="Bugatti back view" />
            </section>
            <section className="info-container">
            <h3>Key Specifications</h3>
            <ul>
                <li><strong>Engine:</strong> 8.0L Quad-Turbocharged W16</li>
                <li><strong>Horsepower:</strong> 1,500 hp</li>
                <li><strong>0-100 km/h:</strong> 2.4 seconds</li>
                <li><strong>Transmission:</strong> 7-speed dual-clutch automatic</li>
                <li><strong>Top Speed:</strong> Electronically limited to 420 km/h</li>
                <li><strong>Price:</strong> Approximately £2.6 million</li>
            </ul>
            </section>
        </section>
    </section>

    <section className="video-container">
        <div className="video-wrapper">
            <iframe 
                src="https://www.youtube.com/embed/wO6jaDmJLog" 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                title="Bugatti Chiron Video"
            ></iframe>
        </div>
        <section className="cta-container">
            <h2>Ready to Experience Bugatti Chiron?</h2>
        </section>
    </section>

    <FormBooking />

    <section className="cta-section">
        <h3>Don't Miss Out on the Bugatti Chiron Experience!</h3>
        <p>Book now to secure your Bugatti Chiron for your next adventure. Availability is limited!</p>
    </section>
    </>
  )
}

export default Bugatti
