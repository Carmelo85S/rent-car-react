import FormBooking from '../../../components/FormBooking';
import Title from '../../../components/Title';
import Porsche911 from '../../../assets/cabriolet/porsche911/porsche911turbo.webp';
import Porsche911_1 from '../../../assets/cabriolet/porsche911/porsche-911-intern-front.webp';
import Porsche911_2 from '../../../assets/cabriolet/porsche911/porsche-911-intern.webp';
import Porsche911_3 from '../../../assets/cabriolet/porsche911/porsche-911-on-the-road.webp';
import Porsche911_4 from '../../../assets/cabriolet/porsche911/porsche-911-top.webp';
import '../../../style/car-details/car-details.css';

const PorscheTurbo = () => {
    return (
        <>
            <div className='wrapper'>
                <section className="title-container">
                    <Title title="Porsche 911 Turbo" />
                </section>

                {/* Hero Section */}
                <section className="hero-details">
                    <section className="info-container">
                        <p className="info">
                        Experience the perfect fusion of power, precision, and luxury with the Porsche 911 Cabriolet, 
                        a true icon of automotive excellence. Powered by a 3.0L twin-turbocharged engine, the 911 Cabriolet 
                        produces up to 443 horsepower, accelerating from 0 to 100 km/h in just 3.7 seconds. 
                        With its distinctive design, cutting-edge technology, and unparalleled driving dynamics, 
                        the Porsche 911 Cabriolet offers an unforgettable experience on every road. 
                        Whether you're cruising along the coast or tackling tight corners, this convertible promises a ride 
                        that is as thrilling as it is luxurious. Rent the Porsche 911 Cabriolet and discover a new level of 
                        performance and elegance.
                        </p>
                    </section>

                    <section className="img-container">
                        <img src={Porsche911} alt="Porsche 911 cabriolet" />
                    </section>
                </section> 
            </div>

            {/* Gallery and Specifications */}
            <section className="img-info-wrapper">
                <section className="car-spec-container">
                    <section className="img-container">
                        <img src={Porsche911_1} alt="porsche 911 Cabriolet intern front" />
                        <img src={Porsche911_2} alt="porsche 911 Cabriolet interior" />
                        <img src={Porsche911_3} alt="porsche 911 Cabriolet on the road" />
                        <img src={Porsche911_4} alt="porsche 911 Cabriolet top view" />
                    </section>

                    <section className="info-container">
                        <h3>Key Specifications</h3>
                        <ul>
                            <li><strong>Engine:</strong> 3.0L Twin-Turbocharged Flat-Six</li>
                            <li><strong>Horsepower:</strong> 443 hp</li>
                            <li><strong>0-100 km/h:</strong> 3.7 seconds</li>
                            <li><strong>Transmission:</strong> 8-speed PDK Dual-Clutch Automatic</li>
                            <li><strong>Top Speed:</strong> 306 km/h</li>
                            <li><strong>Price:</strong> Available upon request</li>
                        </ul>
                    </section>
                </section>
            </section>

            {/* Video Section */}
            <section className="video-container">
                <div className="video-wrapper">
                <iframe 
                    src="https://www.youtube.com/embed/Aw9iMiefP5s" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    title="Porsche 911 Video"
                ></iframe>

                </div>
                <section className="cta-container">
                    <h2>Ready to Experience the Porsche 911 Cabriolet?</h2>
                </section>
            </section>


            <FormBooking />


            {/* Call-to-Action Section */}
            <section className="cta-section">
                <h3>Don't Miss Out on the Porsche 911 Cabriolet Experience!</h3>
                <p>Book now to secure your Porsche 911 Cabriolet for your next adventure. Availability is limited!</p>
            </section>
        </>
    );
}

export default PorscheTurbo
