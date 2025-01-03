import BmwS8 from '../../../assets/cabriolet/bmws8/bmw-8-serie.webp';
import FormBooking from '../../../components/FormBooking';
import Title from '../../../components/Title';
import '../../../style/car-details/car-details.css';

const Bmws8 = () => {
    return (
        <>
            <div className='wrapper'>
                <section className="title-container">
                    <Title title="BMW S8 Cabriolet" />
                </section>

                {/* Hero Section */}
                <section className="hero-details">
                    <section className="info-container">
                        <p className="info">
                            Discover the ultimate combination of luxury and performance with the BMW S8 Cabriolet. 
                            Powered by a 4.4L V8 Twin-Turbocharged engine delivering 523 horsepower, this convertible 
                            accelerates from 0 to 100 km/h in just 4.1 seconds. With its sleek design, advanced technology, 
                            and refined interior, the BMW S8 offers an unparalleled driving experience. Book today to enjoy 
                            the open road like never before.
                        </p>
                    </section>

                    <section className="img-container">
                        <img src={BmwS8} alt="BMW S8 Cabriolet front view" />
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
                    src="https://www.youtube.com/embed/NDeTFbI_fkM" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    title="BMW S8 Cabriolet Video"
                ></iframe>

                </div>
                <section className="cta-container">
                    <h2>Ready to Experience the BMW S8 Cabriolet?</h2>
                </section>
            </section>


            <FormBooking />


            {/* Call-to-Action Section */}
            <section className="cta-section">
                <h3>Don't Miss Out on the BMW S8 Cabriolet Experience!</h3>
                <p>Book now to secure your BMW S8 Cabriolet for your next adventure. Availability is limited!</p>
            </section>
        </>
    );
};

export default Bmws8;
