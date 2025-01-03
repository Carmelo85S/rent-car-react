import FerrariHero from '../../../assets/speed/ferrari/ferrari-488-hero.webp';
import FormBooking from '../../../components/FormBooking';
import Title from '../../../components/Title';
import '../../../style/car-details/car-details.css'
const Ferrari = () => {
  return (
    <>
    <div className='wrapper'>
        <section className="title-container">
            <Title title="Ferrari 488" />
        </section>
        <section className="hero-details">
            <section className="info-container">
                <p className="info">
                Experience the pinnacle of Italian automotive excellence with the Ferrari 488, 
                a masterpiece that seamlessly combines power and elegance. This supercar is 
                equipped with a formidable 3.9L V8 twin-turbocharged engine, delivering an 
                exhilarating 670 horsepower, propelling you from 0 to 100 km/h in just 3.0 seconds. 
                The 488 offers a harmonious blend of high-performance engineering and luxurious craftsmanship,
                ensuring a driving experience that is both thrilling and refined.
                Elevate your journey—rent the Ferrari 488 and indulge in the unparalleled luxury and 
                excitement that this exceptional vehicle provides.
                </p>
            </section>
            <section className="img-container">
                <img src={FerrariHero} alt="A white bugatti" />
            </section>
        </section> 
    </div>
    <section className="img-info-wrapper">
        <section className="car-spec-container">
            <section className="info-container">
            <h3>Key Specifications</h3>
            <ul>
                <li><strong>Engine:</strong> 3.9L Twin-Turbocharged V8</li>
                <li><strong>Horsepower:</strong> 661 hp @ 8,000 rpm</li>
                <li><strong>0-100 km/h:</strong> 3.0 seconds</li>
                <li><strong>Transmission:</strong> 7-speed dual-clutch automatic</li>
                <li><strong>Top Speed:</strong> 330 km/h</li>
                <li><strong>Price:</strong> Approximately £183,984</li>
            </ul>
            </section>
        </section>
    </section>

    <section className="video-container">
        <div className="video-wrapper">
            <iframe 
                src="https://www.youtube.com/embed/iqxIu1cyRfk" 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                title="Ferrari 488 Video"
            ></iframe>
        </div>
        <section className="cta-container">
            <h2>Ready to Experience Ferrari 488?</h2>
        </section>
    </section>

    <FormBooking />

    <section className="cta-section">
        <h3>Don't Miss Out on the Ferrari 488 Experience!</h3>
        <p>Book now to secure your Ferrari 488 for your next adventure. Availability is limited!</p>
    </section>
    </>
  )
}

export default Ferrari
