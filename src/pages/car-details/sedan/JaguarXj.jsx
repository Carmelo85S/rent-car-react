import JaguarXjHero from '../../../assets/sedan/jaguar-xj/jaguar-xj-hero.webp';
import FormBooking from '../../../components/FormBooking';
import Title from '../../../components/Title';
import '../../../style/car-details/car-details.css'

const JaguarXJ = () => {
  return (
    <>
    <div className='wrapper'>
        <section className="title-container">
            <Title title="jaguar xj" />
        </section>
        <section className="hero-details">
        <section className="info-container">
        <p className="info">
            Experience the perfect blend of elegance, luxury, and dynamic performance with the Jaguar XJ, 
            a sedan that redefines sophistication. Powered by a 3.0L V6 Supercharged engine, the XJ produces 
            an exhilarating 340 horsepower, accelerating from 0 to 100 km/h in just 5.9 seconds. With its lightweight 
            aluminum chassis and responsive handling, the Jaguar XJ offers a driving experience that is both smooth and agile. 
            Inside, the XJ provides a luxurious and refined cabin, featuring premium leather seating, cutting-edge infotainment, 
            and advanced driver-assistance systems, ensuring a serene and enjoyable journey. 
            Redefine what it means to drive in style—rent the Jaguar XJ and indulge in the ultimate combination of 
            performance and luxury.
        </p>
        </section>
            <section className="img-container">
                <img src={JaguarXjHero} alt="Black Jaguar xj on movement the road side front view" />
            </section>
        </section> 
    </div>
    <section className="img-info-wrapper">
        <section className="car-spec-container">
            <section className="info-container">
            <h3>Key Specifications</h3>
                <ul>
                    <li><strong>Engine:</strong> 3.0L V6 Supercharged</li>
                    <li><strong>Horsepower:</strong> 340 hp</li>
                    <li><strong>0-100 km/h:</strong> 5.9 seconds</li>
                    <li><strong>Transmission:</strong> 8-speed automatic</li>
                    <li><strong>Top Speed:</strong> 250 km/h</li>
                    <li><strong>Price:</strong> Approximately £60,000</li>
                </ul>
            </section>
        </section>
    </section>

    <section className="video-container">
        <div className="video-wrapper">
            <iframe 
                src="https://www.youtube.com/embed/06YQn-q-6c4" 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                title="Jaguar XJ Video"
            ></iframe>
        </div>
        <section className="cta-container">
            <h2>Ready to Experience Jaguar XJ?</h2>
        </section>
    </section>

    <FormBooking />

    <section className="cta-section">
        <h3>Don't Miss Out on the Jaguar XJ Experience!</h3>
        <p>Book now to secure your Jaguar XJ for your next adventure. Availability is limited!</p>
    </section>
    </>
  )
}

export default JaguarXJ
