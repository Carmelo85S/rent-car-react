import AstonHero from '../../../assets/cabriolet/aston-martin/aston-cabriolet-hero.webp';
import FormBooking from '../../../components/FormBooking';
import Title from '../../../components/Title';
import '../../../style/car-details/car-details.css'

const Aston = () => {
  return (
    <>
    <div className='wrapper'>
        <section className="title-container">
            <Title title="Aston Martin DB12" />
        </section>
        <section className="hero-details">
            <section className="info-container">
                <p className="info">
                    Experience the perfect blend of power and sophistication with the Aston Martin DB12, 
                    a stunning achievement in British automotive craftsmanship available for your next journey.
                    This elite grand tourer boasts an impressive 671 horsepower, launching you from 0 to 100 km/h in 
                    just 3.5 seconds. The DB12 delivers a smooth yet thrilling performance, merging Aston Martin’s 
                    state-of-the-art engineering with an unmistakable elegance. Elevate your drive—rent the Aston Martin DB12
                    and savor the unmatched luxury and exhilaration of this super tourer.
                </p>
            </section>
            <section className="img-container">
                <img src={AstonHero} alt="Aston martin front aston-martin-booking-front-grid" />
            </section>
        </section> 
    </div>
    <section className="img-info-wrapper">
        <section className="car-spec-container">
            
            <section className="info-container">
                <h3>Key Specifications</h3>
                <ul>
                    <li><strong>Engine:</strong> 4.0L V8 Twin-Turbocharged</li>
                    <li><strong>Horsepower:</strong> 671 hp</li>
                    <li><strong>0-100 km/h:</strong> 3.5 seconds</li>
                    <li><strong>Transmission:</strong> 8-speed automatic</li>
                    <li><strong>Top Speed:</strong> 320 km/h</li>
                    <li><strong>Price:</strong> Available upon request</li>
                </ul>
            </section>
        </section>
    </section>

    <section className="video-container">
        <div className="video-wrapper">
            <iframe 
                src="https://www.youtube.com/embed/dl-Nvizvqiw" 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                title="Aston Martin DB12 Video"
            ></iframe>
        </div>
        <section className="cta-container">
            <h2>Ready to Experience Aston Martin?</h2>
        </section>
    </section>


    <FormBooking />


    <section className="cta-section">
        <h3>Don't Miss Out on the Aston Martin Experience!</h3>
        <p>Book now to secure your Aston Martin DB12 for your next adventure. Availability is limited!</p>
    </section>
    </>
  )
}

export default Aston
