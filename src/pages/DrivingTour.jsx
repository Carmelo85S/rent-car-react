import { Link } from 'react-router-dom';
import DrivingTour1 from '../assets/services/driving-tour-1.webp';
import DrivingTour2 from '../assets/services/driving-tour-2.webp';
import FormMain from '../components/FormMain';
import '../style/services/services.css';


const DrivingTour = () => {
    return(
        <>
            <div className="wrapper-category">
                <section className="category-container">
                    <section className="category-container-heading">
                        <h1 className="title">Driving Tour</h1>
                    </section>
                </section>
            </div>

            <section className="wrapper-info">
                <section className="info-container">
                    <section className="info-text-container-left">
                        <h2 className="head">
                            Luxury Driving Tours
                        </h2>
                        <p className="info">
                        Embark on a scenic journey like no other with our exclusive luxury driving tours,
                        designed to showcase stunning landscapes and hidden gems. Our professional drivers 
                        and guides provide a seamless, enriching experience, allowing you to fully relax and
                        take in every beautiful detail along the way.
                        </p>
                        <Link className="cta" to="/contact-info">Contact us</Link>
                    </section>
                    <section className="img-info-container-right">
                        <section className="img-info">
                            <img src={DrivingTour1} alt="young couple watching mountain panorama, woman sitting on a mustang" />
                        </section>
                    </section>
                </section>
            </section>

            <section className="wrapper-text-banner">
                <section className="text-banner-container">
                    <h2 className="text">
                        AT Ride<i>Ready</i> WE LOVE CRAFTING MEMORABLE DRIVING TOURS,
                        WHERE EVERY JOURNEY IS A SCENIC ADVENTURE.
                    </h2>
                </section>
            </section>

            <section className="wrapper-content">
                <section className="content-container">
                    <section className="text-container">
                        <p className="info">
                            Embrace the thrill of the open road with our exclusive driving tours, where adventure meets precision. 
                            Our experienced guides lead you through breathtaking landscapes, ensuring every moment is immersive 
                            and unforgettable.
                        </p>
                        <p className="info">
                            From winding mountain roads to coastal vistas, our driving tours offer a unique blend of excitement and 
                            scenic beauty. Our fleet of high-performance vehicles combines comfort with power, letting you focus on 
                            the journey while we take care of every detail for a safe, seamless, and exhilarating experience.
                        </p>
                    </section>
                    
                    <section className="img-content">
                        <img src={DrivingTour2} alt="suv bmw with sea landscape in background" />
                    </section>
                </section>
            </section>
            <FormMain />
        </>
    )
}

export default DrivingTour;