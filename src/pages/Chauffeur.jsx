import { Link } from 'react-router-dom';
import Chauffeur1 from '../assets/services/chauffeur-1.webp';
import Chauffeur2 from '../assets/services/chauffeur-2.webp';
import FormMain from '../components/FormMain';
import '../style/services/services.css';


const Chauffeur = () => {
    return(
        <>
            <div className="wrapper-category">
                <section className="category-container">
                    <section className="category-container-heading">
                        <h1 className="title">CHAUFFEUR</h1>
                    </section>
                </section>
            </div>

            <section className="wrapper-info">
            <section className="info-container">
                <section className="info-text-container-left">
                    <h2 className="head">
                        First Class Chauffeur Services
                    </h2>
                    <p className="info">
                        Experience the ultimate in luxury and convenience with our professional chauffeur service.
                        Our experienced drivers ensure a seamless, comfortable journey, allowing you to relax and
                        enjoy every moment, whether it's for business, special occasions, or city tours. With a fleet
                        of premium vehicles, we guarantee style, safety, and personalized service tailored to your needs.
                    </p>
                    <Link className="cta" to="/contact">Contact us</Link>
                </section>
                <section className="img-info-container-right">
                    <img src={Chauffeur1} alt="chaffeur opening car door to a woman" />
                </section>
            </section>
            </section>

            <section className="wrapper-text-banner">
                <section className="text-banner-container">
                    <h2 className="text">
                        WHAT MAKES Ride<i>Ready</i> UNIQUE IS OUR DEDICATION TO
                        DELIVERING A SMOOTH CHAFFEAUR EXPERIENCE EVERY TIME.
                    </h2>
                </section>
            </section>

            <section className="wrapper-content">
                <section className="content-container">
                    <section className="text-container">
                        <p className="info">
                            Discover a new standard of travel with our chauffeur service, 
                            where luxury meets exceptional care. Our dedicated chauffeurs 
                            are highly trained, punctual, and attentive, ensuring that your 
                            experience is as smooth and comfortable as possible.
                        </p>
                        <p className="info">
                            From important meetings to memorable occasions, our chauffeur 
                            service provides a refined, stress-free travel experience. 
                            Our fleet of high-end vehicles offers both elegance and comfort, 
                            while our chauffeurs handle every detail, allowing you to sit back,
                            relax, and arrive with confidence and style.
                        </p>
                    </section>
                    <section className="img-content">
                        <img src={Chauffeur2} alt="chauffeur driving with a woman sitting in the back seat" />
                    </section>
                </section>
            </section>
            <FormMain />
        </>

    )
}

export default Chauffeur;