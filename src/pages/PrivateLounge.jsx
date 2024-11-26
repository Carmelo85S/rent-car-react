import { Link } from 'react-router-dom';
import Private1 from '../assets/services/private-lounge-1.webp';
import Private2 from '../assets/services/private-lounge-2.webp';
import FormMain from '../components/FormMain';
import '../style/services/services.css';


const PrivateLounge = () => {
    return(
        <>
        <div className="wrapper-category">
            <section className="category-container">
                <section className="category-container-heading">
                    <h1 className="title">Private Lounge</h1>
                </section>
            </section>
        </div>

        <section className="wrapper-info">
            <section className="info-container">
                <section className="info-text-container-left">
                    <h2 className="head">
                        PRIVATE LOUNGE
                    </h2>
                    <p className="info">
                        Indulge in luxury with our exclusive Private Lounge service. Designed to offer you a serene and comfortable environment, 
                        our lounge is the perfect place to relax before your journey. Whether you're waiting for your vehicle, enjoying a 
                        pre-drive refreshment, or needing a quiet space to work, our Private Lounge provides a sophisticated and intimate atmosphere.
                    </p>
                    <Link className="cta" to="/contact">Contact us</Link>
                </section>
                <section className="img-info-container-right">
                    <section className="img-info">
                        <img src={Private1} alt="luxury lounge interior" />
                    </section>
                </section>
            </section>
        </section>

        <section className="wrapper-text-banner">
            <section className="text-banner-container">
                <h2 className="text">
                    AT Ride<i>Ready</i> WE OFFER A PRIVATE LOUNGE EXPERIENCE,
                    CATERED TO YOUR EVERY NEED FOR ULTIMATE RELAXATION AND COMFORT.
                </h2>
            </section>
        </section>

        <section className="wrapper-content">
            <section className="content-container">
                <section className="text-container">
                    <p className="info">
                        Step into our Private Lounge, a sanctuary designed for comfort and exclusivity. Whether you’re a business professional 
                        or simply enjoying a premium experience, our lounge offers a tranquil environment, perfect for unwinding or preparing 
                        for your next journey. Featuring plush seating, high-end amenities, and attentive service, your time in the lounge will 
                        be as pleasant as your ride.
                    </p>
                    <p className="info">
                        Enjoy a premium selection of beverages, complimentary Wi-Fi, and personalized assistance in a space designed to cater 
                        to your every need. Our lounge service is available to clients booking our vehicles for any occasion, making your 
                        experience even more exceptional. Let us take care of you, from start to finish.
                    </p>
                </section>
                
                <section className="img-content">
                    <img src={Private2} alt="person with trolley with backlight from the sunset" />
                </section>
            </section>
        </section>
        <FormMain />
        </>
    )
}

export default PrivateLounge;