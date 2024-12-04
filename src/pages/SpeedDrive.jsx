import { Link } from 'react-router-dom';
import SpeedDrive1 from '../assets/services/speed-drive-1.webp';
import SpeedDrive2 from '../assets/services/speed-drive-2.webp';
import FormMain from '../components/FormMain';
import '../style/services/services.css';


const SpeedDrive = () => {
    return(
        <>
            <div className="wrapper-category">
                <section className="category-container">
                    <section className="category-container-heading">
                        <h1 className="title">Speed Drive</h1>
                    </section>
                </section>
            </div>

            <section className="wrapper-info">
                <section className="info-container">
                    <section className="info-text-container-left">
                        <h2 className="head">
                        High-Speed Track Experience
                        </h2>
                        <p className="info">
                        Step into the world of speed and precision with our Drive Experience. Feel the thrill of 
                        handling high-performance cars on a professional track designed for exhilarating moments.
                        With expert instructors to guide you, you'll master the art of high-speed driving, experiencing 
                        the rush of acceleration and the control needed to handle every curve. Whether you're a seasoned 
                        enthusiast or new to track driving, we promise an unforgettable, adrenaline-pumping adventure.
                        </p>
                        <Link className="cta" to="/contact-info">Contact us</Link>
                    </section>
                    <section className="img-info-container-right">
                        <section className="img-info">
                            <img src={SpeedDrive1} alt="young couple watching mountain panorama, woman sitting on a mustang" />
                        </section>
                    </section>
                </section>
            </section>

            <section className="wrapper-text-banner">
                <section className="text-banner-container">
                    <h2 className="text">
                    FEEL THE POWER, CONTROL, AND ADRENALINE GUIDED BY EXPERT INSTRUCTORS WHO PRIORITIZE BOTH SAFETY 
                    AND PERFORMANCE
                    </h2>
                </section>
            </section>

            <section className="wrapper-content">
                <section className="content-container">
                    <section className="text-container">
                        <p className="info">
                        Experience the thrill of high-speed driving like never before with our Drive Experience,
                        where power meets precision on the track. Our professional instructors are experts in 
                        performance driving, ensuring that your session is both exhilarating and safe, allowing
                        you to push limits with confidence.
                    </p>
                    <p className="info">
                        From adrenaline-fueled straights to challenging corners, our Drive Experience offers a 
                        unique, controlled environment to test your skills and explore the power of our elite 
                        performance vehicles. Every detail is handled with care, letting you focus on the pure 
                        excitement of the drive. Buckle up, take control, and feel the rush as you master the 
                        track with style and precision.
                        </p>
                    </section>
                    
                    <section className="img-content">
                        <img src={SpeedDrive2} alt="suv bmw with sea landscape in background" />
                    </section>
                </section>
            </section>
            <FormMain />
        </>
    )
}

export default SpeedDrive;