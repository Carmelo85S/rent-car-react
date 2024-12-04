import { Link } from 'react-router-dom';
import ShortTerm1 from '../assets/services/short-term-1.webp';
import ShortTerm2 from '../assets/services/short-term-2.webp';
import FormMain from '../components/FormMain';
import '../style/services/services.css';


const ShortTerm = () => {
    return(
            <>
                <div className="wrapper-category">
                    <section className="category-container">
                        <section className="category-container-heading">
                            <h1 className="title">Short Term</h1>
                        </section>
                    </section>
                </div>
    
                <section className="wrapper-info">
                    <section className="info-container">
                        <section className="info-text-container-left">
                            <h2 className="head">
                                Short Term Rental
                            </h2>
                            <p className="info">
                            Whether it’s for a business trip, a weekend getaway, or a special event, our short-term rental service 
                            offers you the freedom to drive a premium vehicle without the hassle of long-term commitments. 
                            Experience seamless luxury and unparalleled convenience for every journey.
                            </p>
                            <Link className="cta" to="/contact-info">Contact us</Link>
                        </section>
                        <section className="img-info-container-right">
                            <section className="img-info">
                                <img src={ShortTerm1} alt="Woman sitting on top of a cabriolet car watching the phone" />
                            </section>
                        </section>
                    </section>
                </section>
    
                <section className="wrapper-text-banner">
                    <section className="text-banner-container">
                        <h2 className="text">
                            Ride<i>Ready</i> SHORT-TERM RENTALS COMBINE FLEXIBILITY, AFFORDABILITY, AND LUXURY.
                        </h2>
                    </section>
                </section>
    
                <section className="wrapper-content">
                    <section className="content-container">
                        <section className="text-container">
                        <p className="info">
                            Our short-term rental services are designed with your unique needs in mind. 
                            Choose from a wide selection of high-end vehicles, perfect for any occasion. 
                            From sleek sedans to spacious SUVs, we ensure that every car is meticulously maintained 
                            and ready for your next adventure.
                        </p>
                        <p className="info">
                            Enjoy a hassle-free process with flexible pick-up and drop-off locations, 
                            competitive pricing, and no hidden fees. At RideReady, we prioritize your convenience 
                            and satisfaction, making us your go-to option for short-term car rentals.
                        </p>
                        </section>
                        <section className="img-content">
                            <img src={ShortTerm2} alt="Woman driving a cabriolet car" />
                        </section>
                    </section>
                </section>
                <FormMain />
            </>
        )
    
}

export default ShortTerm;