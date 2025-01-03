import LexusLsHero from '../../../assets/sedan/lexus-ls/lexus-ls-hero.webp';
import FormBooking from '../../../components/FormBooking';
import Title from '../../../components/Title';
import '../../../style/car-details/car-details.css'

const LexusLs = () => {
  return (
    <>
    <div className='wrapper'>
        <section className="title-container">
            <Title title="Lexus ls" />
        </section>
        <section className="hero-details">
        <section className="info-container">
            <p className="info">
            The Lexus LS epitomizes elegance, luxury, and cutting-edge technology. 
            With a refined design, the LS offers a smooth and powerful driving experience. 
            Powered by a 3.5L V6 hybrid engine or a 3.5L V6 turbocharged engine, it combines 
            impressive performance with an eco-conscious approach. The LS’s advanced safety 
            features and luxurious interior make it an ideal choice for those seeking a premium 
            sedan that delivers both comfort and technology.
            Inside, the Lexus LS offers a serene, high-tech environment with premium leather upholstery, 
            a state-of-the-art infotainment system, and cutting-edge driver assistance features. 
            The spacious cabin is designed for both driver and passengers to experience first-class l
            uxury and comfort.
            </p>
        </section>
            <section className="img-container">
                <img src={LexusLsHero} alt="White lexus ls in a salon" />
            </section>
        </section> 
    </div>
    <section className="img-info-wrapper">
        <section className="car-spec-container">
            <section className="info-container">
            <h3>Key Specifications</h3>
                <ul>
                    <li><strong>Engine:</strong> 3.5L V6 Hybrid / 3.5L V6 Turbocharged</li>
                    <li><strong>Horsepower:</strong> 354 hp (Hybrid) / 416 hp (Turbocharged)</li>
                    <li><strong>0-100 km/h:</strong> 5.2 seconds</li>
                    <li><strong>Transmission:</strong> 10-speed automatic</li>
                    <li><strong>Top Speed:</strong> 250 km/h</li>
                    <li><strong>Price:</strong> Approximately $80,000</li>
                </ul>
            </section>
        </section>
    </section>

    <section className="video-container">
        <div className="video-wrapper">
            <iframe 
                src="https://www.youtube.com/embed/MU40rb8P1Zk" 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                title="Lexus LS Video"
            ></iframe>
        </div>
        <section className="cta-container">
            <h2>Ready to Experience Lexus LS?</h2>
        </section>
    </section>

    <FormBooking />

    <section className="cta-section">
        <h3>Don't Miss Out on the Lexus LS Experience!</h3>
        <p>Book now to secure your Lexus LS for your next adventure. Availability is limited!</p>
    </section>
    </>
  )
}

export default LexusLs
