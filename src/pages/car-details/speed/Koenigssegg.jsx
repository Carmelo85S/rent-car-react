import KoenigsseggHero from '../../../assets/speed/koenigsegg/koenigsegg-hero.webp';
import FormBooking from '../../../components/FormBooking';
import Title from '../../../components/Title';
import Koenigssegg_1 from '../../../assets/speed/koenigsegg/koenigsegg-front-interior2.webp';
import Koenigssegg_2 from '../../../assets/speed/koenigsegg/koenigsegg-front-interior.webp';
import Koenigssegg_3 from '../../../assets/speed/koenigsegg/koenigsegg-back.webp';
import Koenigssegg_4 from '../../../assets/speed/koenigsegg/koenigsegg-back-wing.webp';

import '../../../style/car-details/car-details.css'

const Koenigssegg = () => {
  return (
    <>
    <div className='wrapper'>
        <section className="title-container">
            <Title title="Koenigssegg Jesko" />
        </section>
        <section className="hero-details">
            <section className="info-container">
                <p className="info">
                Experience the pinnacle of Swedish automotive excellence with the Koenigsegg Jesko, 
                a masterpiece that seamlessly combines power and elegance. This hypercar is equipped 
                with a formidable 5.0L twin-turbocharged V8 engine, delivering an exhilarating 1,280 
                horsepower on standard gasoline and up to 1,600 horsepower on E85 fuel, propelling you 
                from 0 to 100 km/h in just 2.5 seconds. The Jesko offers a harmonious blend of high-performance
                 engineering and luxurious craftsmanship, ensuring a driving experience that is both 
                 thrilling and refined.
                Elevate your journey—rent the Koenigsegg Jesko and indulge in the unparalleled luxury 
                and excitement that this exceptional vehicle provides
                </p>
            </section>
            <section className="img-container">
                <img src={KoenigsseggHero} alt="A koeniggsegg jesko on the snow" />
            </section>
        </section> 
    </div>
    <section className="img-info-wrapper">
        <section className="car-spec-container">
            <section className="img-container">
                <img src={Koenigssegg_1} alt="Koenissegg Jesko front interior" />
                <img src={Koenigssegg_2} alt="Koenissegg Jesko fron nterior yellow" />
                <img src={Koenigssegg_3} alt="Koenissegg Jesko back view" />
                <img src={Koenigssegg_4} alt="Koenissegg Jesko top view" />
            </section>
            <section className="info-container">
            <h3>Key Specifications</h3>
            <ul>
                <li><strong>Engine:</strong> 5.0L Twin-Turbocharged V8</li>
                <li><strong>Horsepower:</strong> 1,280 hp (1,600 hp on E85 fuel)</li>
                <li><strong>0-100 km/h:</strong> Approximately 2.5 seconds</li>
                <li><strong>Transmission:</strong> 9-speed Light Speed Transmission</li>
                <li><strong>Top Speed:</strong> Estimated over 300 mph (482 km/h)</li>
                <li><strong>Price:</strong> Available upon request</li>
            </ul>
            </section>
        </section>
    </section>

    <section className="video-container">
        <div className="video-wrapper">
            <iframe 
                src="https://www.youtube.com/embed/E8fYy_5gXDg" 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                title="Mc Laren 720S Video"
            ></iframe>
        </div>
        <section className="cta-container">
            <h2>Ready to Experience Koenigssegg Jesko?</h2>
        </section>
    </section>

    <FormBooking />

    <section className="cta-section">
        <h3>Don't Miss Out on the Koenigssegg Jesko Experience!</h3>
        <p>Book now to secure your Koenigssegg Jesko for your next adventure. Availability is limited!</p>
    </section>
    </>
  )
}

export default Koenigssegg
