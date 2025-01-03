import Title from '../../../components/Title';
import FormBooking from '../../../components/FormBooking'
import Mustang_hero from '../../../assets/cabriolet/mustang/mustang-hero.webp';
import '../../../style/car-details/car-details.css'

const Mustang = () => {
    return (
        <>
            <div className='wrapper'>
                <section className="title-container">
                    <Title title="Mustang cabriolet" />
                </section>

                {/* Hero Section */}
                <section className="hero-details">
                    <section className="info-container">
                        <p className="info">
                        Experience the thrill of pure American muscle and open-air freedom with the Ford Mustang Convertible.
                        Powered by a choice of a turbocharged 2.3L EcoBoost engine or the roaring 5.0L V8, 
                        the Mustang Convertible delivers an exhilarating performance, 
                        boasting up to 480 horsepower and a 0-100 km/h time as fast as 4.0 seconds.
                        Step inside, and you'll find a modern, driver-focused interior featuring advanced SYNC® technology,
                         premium materials, and comfort for any journey. Drop the top and let the world in, whether you're 
                         cruising along coastal highways or enjoying the rush of the open road.
                        Schedule your test drive today and experience the Mustang magic firsthand!
                        </p>
                    </section>

                    <section className="img-container">
                        <img src={Mustang_hero} alt="White Mustang with black stripes" />
                    </section>
                </section> 
            </div>

            {/* Gallery and Specifications */}
            <section className="img-info-wrapper">
                <section className="car-spec-container">
                    <section className="info-container">
                        <h3>Key Specifications</h3>
                        <ul>
                            <li><strong>Engine:</strong> 5.0L Ti-VCT V8</li>
                            <li><strong>Horsepower:</strong> 480 hp</li>
                            <li><strong>0-100 km/h:</strong> Approximately 4.0 seconds</li>
                            <li><strong>Transmission:</strong> 6-speed manual with Rev Matching (10-speed automatic available)</li>
                            <li><strong>Top Speed:</strong> Approximately 250 km/h</li>
                            <li><strong>Price:</strong> Starting at $57,970</li>
                        </ul>
                    </section>
                </section>
            </section>

            {/* Video Section */}
            <section className="video-container">
                <div className="video-wrapper">
                <iframe 
                    src="https://www.youtube.com/embed/aLt-cHKrFmo" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    title="Mustang Cabriolet Video"
                ></iframe>

                </div>
                <section className="cta-container">
                    <h2>Ready to Experience the Mustang Cabriolet?</h2>
                </section>
            </section>

            <FormBooking />

            {/* Call-to-Action Section */}
            <section className="cta-section">
                <h3>Don't Miss Out on the Mustang Cabriolet Experience!</h3>
                <p>Book now to secure your Mustang Cabriolet for your next adventure. Availability is limited!</p>
            </section>
        </>
    );
}

export default Mustang
