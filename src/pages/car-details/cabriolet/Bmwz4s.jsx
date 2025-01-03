import Title from '../../../components/Title';
import FormBooking from '../../../components/FormBooking'
import Bmwz4_hero from '../../../assets/cabriolet/bmwz4/bmw-z4.webp'
import '../../../style/car-details/car-details.css'

const Bmwz4s = () => {
    return (
        <>
            <div className='wrapper'>
                <section className="title-container">
                    <Title title="BMW z4 Cabriolet" />
                </section>

                {/* Hero Section */}
                <section className="hero-details">
                    <section className="info-container">
                        <p className="info">
                        Experience the perfect fusion of luxury and performance with the BMW Z4.
                        Powered by a 2.0L or 3.0L turbocharged engine, the Z4 offers exhilarating 
                        performance with up to 382 horsepower and a 0-100 km/h time of just 4.3 seconds. 
                        This roadster combines precision handling with a sleek, dynamic design that’s built to captivate.
                         Inside, the BMW Z4 features a premium interior equipped with cutting-edge 
                         technology and comfort, ensuring a refined driving experience. 
                         Whether you’re enjoying a scenic drive or pushing the limits on the track, 
                         the BMW Z4 delivers the ultimate in speed, style, and sophistication. 
                         Book your test drive today and feel the thrill of the open road.
                        </p>
                    </section>

                    <section className="img-container">
                        <img src={Bmwz4_hero} alt="BMW Z4 on the road" />
                    </section>
                </section> 
            </div>

            {/* Gallery and Specifications */}
            <section className="img-info-wrapper">
                <section className="car-spec-container">
                    <section className="info-container">
                        <h3>Key Specifications</h3>
                        <ul>
                            <li><strong>Engine:</strong> 4.4L V8 Twin-Turbocharged</li>
                            <li><strong>Horsepower:</strong> 523 hp</li>
                            <li><strong>0-100 km/h:</strong> 4.1 seconds</li>
                            <li><strong>Transmission:</strong> 8-speed automatic</li>
                            <li><strong>Top Speed:</strong> 250 km/h</li>
                            <li><strong>Price:</strong> Available upon request</li>
                        </ul>
                    </section>
                </section>
            </section>

            {/* Video Section */}
            <section className="video-container">
                <div className="video-wrapper">
                <iframe 
                    src="https://www.youtube.com/embed/KvOn8EDpBlY" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    title="BMW Z4 Cabriolet Video"
                ></iframe>

                </div>
                <section className="cta-container">
                    <h2>Ready to Experience the BMW Z4 Cabriolet?</h2>
                </section>
            </section>


            <FormBooking />


            {/* Call-to-Action Section */}
            <section className="cta-section">
                <h3>Don't Miss Out on the BMW Z4 Cabriolet Experience!</h3>
                <p>Book now to secure your BMW Z4 Cabriolet for your next adventure. Availability is limited!</p>
            </section>
        </>
    );
}

export default Bmwz4s
