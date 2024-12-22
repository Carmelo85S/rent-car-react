import AstonVanquish from '../../../assets/speed/aston/aston-vanquish.webp';
import FormBooking from '../../../components/FormBooking';
import Title from '../../../components/Title';
import Aston1 from '../../../assets/cabriolet/aston-martin/aston-martin-booking-intern-front.webp';
import Aston2 from '../../../assets/cabriolet/aston-martin/aston-martin-booking-intern.webp';
import Aston3 from '../../../assets/cabriolet/aston-martin/aston-martin-booking-seat.webp';
import Aston4 from '../../../assets/cabriolet/aston-martin/aston-martin-booking.webp';

import '../../../style/car-details/car-details.css'

const AstonP = () => {
  return (
    <>
    <div className='wrapper'>
        <section className="title-container">
            <Title title="Aston Martin Vanquish" />
        </section>
        <section className="hero-details">
            <section className="info-container">
                <p className="info">
                Experience the epitome of British automotive excellence with the Aston Martin Vanquish, 
                a masterpiece that seamlessly combines power and elegance. This grand tourer is equipped 
                with a formidable 6.0L V12 engine, delivering an exhilarating 568 horsepower, propelling 
                you from 0 to 100 km/h in just 3.6 seconds. The Vanquish offers a harmonious blend of 
                high-performance engineering and luxurious craftsmanship, ensuring a driving experience 
                that is both thrilling and refined.
                Elevate your journey—rent the Aston Martin Vanquish and indulge in the unparalleled 
                luxury and excitement that this exceptional vehicle provides.
                </p>
            </section>
            <section className="img-container">
                <img src={AstonVanquish} alt="Black Aston martin Vansquish on the road" />
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
                src="https://www.youtube.com/embed/ttovshZgIC0" 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                title="Aston Martin Vanquish Video"
            ></iframe>
        </div>
        <section className="cta-container">
            <h2>Ready to Experience Aston Martin?</h2>
        </section>
    </section>

    <FormBooking />

    <section className="cta-section">
        <h3>Don't Miss Out on the Aston Martin Experience!</h3>
        <p>Book now to secure your Aston Martin Vanquish for your next adventure. Availability is limited!</p>
    </section>
    </>
  )
}

export default AstonP
