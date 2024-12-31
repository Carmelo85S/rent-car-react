import LamborghiniHero from '../../../assets/speed/lamborghini-huracan/lamborghini-on-the-road.webp';
import FormBooking from '../../../components/FormBooking';
import Title from '../../../components/Title';
import Lamborghini_1 from '../../../assets/speed/lamborghini-huracan/lamborghini-intern-front.webp';
import Lamborghini_2 from '../../../assets/speed/lamborghini-huracan/lamborghini-yellow.webp';
import Lamborghini_3 from '../../../assets/speed/lamborghini-huracan/lamborghini-top.webp';
import Lamborghini_4 from '../../../assets/speed/lamborghini-huracan/lamborghini-back.webp';

import '../../../style/car-details/car-details.css'

const Lambo = () => {
  return (
    <>
    <div className='wrapper'>
        <section className="title-container">
            <Title title="lamborghini huracan" />
        </section>
        <section className="hero-details">
            <section className="info-container">
                <p className="info">
                Experience the pinnacle of Italian automotive excellence with the Lamborghini Huracán, 
                a masterpiece that seamlessly combines power and elegance. This supercar is equipped with 
                a formidable 5.2L V10 engine, delivering an exhilarating 602 horsepower, propelling you from 
                0 to 100 km/h in just 3.2 seconds. The Huracán offers a harmonious blend of high-performance 
                engineering and luxurious craftsmanship, ensuring a driving experience that is both thrilling 
                and refined.
                Elevate your journey—rent the Lamborghini Huracán and indulge in the 
                unparalleled luxury and excitement that 
                this exceptional vehicle provides.
                </p>
            </section>
            <section className="img-container">
                <img src={LamborghiniHero} alt="A lamborghini on the road" />
            </section>
        </section> 
    </div>
    <section className="img-info-wrapper">
        <section className="car-spec-container">
            <section className="img-container">
                <img src={Lamborghini_1} alt="Lamborghini Huracan front interior" />
                <img src={Lamborghini_2} alt="Lamborghini Huracan fron nterior yellow" />
                <img src={Lamborghini_3} alt="Lamborghini Huracan back view" />
                <img src={Lamborghini_4} alt="Lamborghini Huracan top view" />
            </section>
            <section className="info-container">
            <h3>Key Specifications</h3>
            <ul>
                <li><strong>Engine:</strong> 5.2L V10</li>
                <li><strong>Horsepower:</strong> 602 hp</li>
                <li><strong>0-100 km/h:</strong> 3.2 seconds</li>
                <li><strong>Transmission:</strong> 7-speed dual-clutch automatic</li>
                <li><strong>Top Speed:</strong> 325 km/h</li>
                <li><strong>Price:</strong> Approximately $310,984</li>
            </ul>
            </section>
        </section>
    </section>

    <section className="video-container">
        <div className="video-wrapper">
            <iframe 
                src="https://www.youtube.com/embed/-PEcrgA8XNs" 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                title="Lamborghini Huracan Video"
            ></iframe>
        </div>
        <section className="cta-container">
            <h2>Ready to Experience Lamborghini Huracan?</h2>
        </section>
    </section>

    <FormBooking />

    <section className="cta-section">
        <h3>Don't Miss Out on the Lamborghini Huracan Experience!</h3>
        <p>Book now to secure your Lamborghini Huracan for your next adventure. Availability is limited!</p>
    </section>
    </>
  )
}

export default Lambo
