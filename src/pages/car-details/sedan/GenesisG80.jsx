import GenesisG80_hero from '../../../assets/sedan/genesis-g80/genesis-g80-hero.webp';
import FormBooking from '../../../components/FormBooking';
import Title from '../../../components/Title';
import '../../../style/car-details/car-details.css'

const GenesisG80 = () => {
  return (
    <>
    <div className='wrapper'>
        <section className="title-container">
            <Title title="Genesis G80" />
        </section>
        <section className="hero-details">
        <section className="info-container">
        <p className="info">
            Discover the perfect blend of elegance, performance, and cutting-edge technology with the Genesis G80, 
            a luxury sedan that redefines sophistication. Powered by a 2.5L turbocharged Inline-4 engine, the G80 delivers 
            an impressive 300 horsepower, ensuring a smooth and responsive driving experience. With its refined suspension 
            system and advanced rear-wheel-drive platform, the G80 offers precision handling and unparalleled comfort. 
            Inside, the Genesis G80 showcases meticulous craftsmanship, featuring premium materials, a state-of-the-art 
            infotainment system, and advanced safety technologies. From its spacious cabin to its customizable ambient 
            lighting, every detail is designed to provide an exceptional driving and riding experience. 
            Elevate your journeys—rent the Genesis G80 and enjoy the pinnacle of modern luxury and innovation.
        </p>
        </section>
            <section className="img-container">
                <img src={GenesisG80_hero} alt="white genesis g80 with background at the sunset" />
            </section>
        </section> 
    </div>
    <section className="img-info-wrapper">
        <section className="car-spec-container">
            <section className="info-container">
            <h3>Key Specifications</h3>
                <ul>
                    <li><strong>Engine:</strong> 2.5L Turbocharged Inline-4</li>
                    <li><strong>Horsepower:</strong> 300 hp</li>
                    <li><strong>0-100 km/h:</strong> 6.0 seconds</li>
                    <li><strong>Transmission:</strong> 8-speed automatic</li>
                    <li><strong>Top Speed:</strong> 240 km/h</li>
                    <li><strong>Price:</strong> Approximately $50,000</li>
                </ul>
            </section>
        </section>
    </section>

    <section className="video-container">
        <div className="video-wrapper">
            <iframe 
                src="https://www.youtube.com/embed/lmUJMiu1Aqw" 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                title="Genesis g80 Video"
            ></iframe>
        </div>
        <section className="cta-container">
            <h2>Ready to Experience Genesis G80?</h2>
        </section>
    </section>

    <FormBooking />

    <section className="cta-section">
        <h3>Don't Miss Out on the Genesis G80!</h3>
        <p>Book now to secure your Genesis G80 for your next adventure. Availability is limited!</p>
    </section>
    </>
  )
}

export default GenesisG80
