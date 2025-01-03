import RangeRoverHero from '../../../assets/suv/range-rover/range-rover-hero.webp';
import FormBooking from '../../../components/FormBooking';
import Title from '../../../components/Title';
import '../../../style/car-details/car-details.css'

const RangeRover = () => {
  return (
    <>
    <div className='wrapper'>
        <section className="title-container">
            <Title title="Range Rover" />
        </section>
        <section className="hero-details">
        <section className="info-container">
            <p className="info">
            Unleash unrivaled power and luxury with the Range Rover P530, an SUV that exemplifies the pinnacle 
            of British engineering and opulence. Powered by a formidable 4.4L V8 engine, the P530 delivers an awe-inspiring 
            523 horsepower, accelerating from 0 to 100 km/h in just 4.4 seconds. With its advanced air suspension system, 
            dynamic handling, and sophisticated all-wheel drive, the Range Rover P530 offers an unparalleled driving 
            experience both on and off the road. 
            Inside, the P530 provides a lavish, serene environment with premium leather upholstery, cutting-edge 
            technology, and a panoramic roof, ensuring that every journey is as comfortable as it is exhilarating. 
            Experience the perfect blend of rugged performance and refined luxury—rent the Range Rover P530 and 
            elevate your driving experience to new heights.
            </p>
        </section>
            <section className="img-container">
                <img src={RangeRoverHero} alt="Range rover on the road" />
            </section>
        </section> 
    </div>
    <section className="img-info-wrapper">
        <section className="car-spec-container">
            <section className="info-container">
            <h3>Key Specifications</h3>
                <ul>
                    <li><strong>Engine:</strong> 5.2L V12 Twin-Turbocharged</li>
                    <li><strong>Horsepower:</strong> 824 hp</li>
                    <li><strong>0-100 km/h:</strong> 3.2 seconds</li>
                    <li><strong>Transmission:</strong> 8-speed automatic</li>
                    <li><strong>Top Speed:</strong> 344 km/h</li>
                    <li><strong>Price:</strong> Approximately £300,000</li>
                </ul>
            </section>
        </section>
    </section>

    <section className="video-container">
        <div className="video-wrapper">
            <iframe 
                src="https://www.youtube.com/embed/sMTH7Rd-hdY" 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                title="Range Rover Video"
            ></iframe>
        </div>
        <section className="cta-container">
            <h2>Ready to Experience Range Rover?</h2>
        </section>
    </section>

    <FormBooking />

    <section className="cta-section">
        <h3>Don't Miss Out on the Range Rover Experience!</h3>
        <p>Book now to secure your Range Rover for your next adventure. Availability is limited!</p>
    </section>
    </>
  )
}

export default RangeRover
