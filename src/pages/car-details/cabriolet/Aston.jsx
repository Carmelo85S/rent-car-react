import AstonHero from '../../../assets/car-details/cabriolet/aston-martin/aston-martin-booking-front-grid.webp';
import Title from '../../../components/Title';
import Aston1 from '../../../assets/cabriolet/aston-martin/aston-martin-booking-intern-front.webp';
import Aston2 from '../../../assets/cabriolet/aston-martin/aston-martin-booking-intern.webp';
import Aston3 from '../../../assets/cabriolet/aston-martin/aston-martin-booking-seat.webp';
import Aston4 from '../../../assets/cabriolet/aston-martin/aston-martin-booking.webp';
import FormImg from '../../../assets/fomt-img/form-img.webp';
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
            <section className="img-container">
                <img src={Aston1} alt="intern front seat" />
                <img src={Aston2} alt="interior screen" />
                <img src={Aston3} alt="seat" />
                <img src={Aston4} alt="top view" />
            </section>
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

    <section className="form-wrapper">
        <section className="form-container">
            <form action="" className="booking-form">
                <section className="form-group">
                    <label htmlFor="pickup-location">Pick-Up Location</label>
                    <select id="pickup-location" name="pickup-location" required>
                        <option value="" disabled selected>Select a location</option>
                        <option value="stockholm">Stockholm</option>
                        <option value="gothenburg">Gothenburg</option>
                        <option value="malmo">Malmö</option>
                        <option value="uppsala">Uppsala</option>
                        <option value="vasteras">Västerås</option>
                    </select>

                    <section className="form-group">
                        <label htmlFor="pickup-time">Pick-Up Time and Date</label>
                        <input type="datetime-local" id="pickup-time" name="pickup-time" required />
                    </section>
                </section>

                <section className="form-group">
                    <label htmlFor="return-location">Return Location</label>
                    <select id="return-location" name="return-location" required>
                        <option value="" disabled selected>Select a location</option>
                        <option value="stockholm">Stockholm</option>
                        <option value="gothenburg">Gothenburg</option>
                        <option value="malmo">Malmö</option>
                        <option value="uppsala">Uppsala</option>
                        <option value="vasteras">Västerås</option>
                    </select>

                    <section className="form-group">
                        <label htmlFor="return-time">Return Time and Date</label>
                        <input type="datetime-local" id="return-time" name="return-time" required />
                    </section>
                </section>

                <section className="form-group">
                    <label htmlFor="kids-chairs">Chair seat (max 2)</label>
                    <input type="number" id="kids-chairs" name="kids-chairs" min="0" max="2" required />
                </section>

                <section className="checkbox-group">
                    <label>
                        <input type="checkbox" id="wedding" name="wedding" /> Wedding Car
                    </label>
                    <label>
                        <input type="checkbox" id="wifi" name="wifi" /> Add Wi-Fi
                    </label>
                </section>

                <section className="form-group">
                    <label htmlFor="additional-info">Additional Information</label>
                    <textarea id="additional-info" name="additional-info" placeholder="Provide any additional details"></textarea>
                </section>

                <section className="form-group">
                    <button type="submit" className="submit-button">Submit</button>
                </section>
            </form>
            <section className="form-image">
                <img src={FormImg} alt="Top view of a street in the forest" />
            </section>
        </section>

        <section className="map">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d130376.9791954411!2d17.729360986718753!3d59.297213999999975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77a53a7ee0cd%3A0xd8966a3e76636f78!2sExclusive%20Cars%20Stockholm%20AB!5e0!3m2!1ssv!2sse!4v1729766065887!5m2!1ssv!2sse" 
                allowFullScreen="" 
                aria-hidden="false" 
                tabIndex="0"
                title="Map"
            ></iframe>
        </section>
    </section>
    <section className="cta-section">
        <h3>Don't Miss Out on the Aston Martin Experience!</h3>
        <p>Book now to secure your Aston Martin DB12 for your next adventure. Availability is limited!</p>
    </section>
    </>
  )
}

export default Aston
