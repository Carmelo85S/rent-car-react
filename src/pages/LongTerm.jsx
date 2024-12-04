import { Link } from 'react-router-dom';
import LongTerm1 from '../assets/services/long-term-1.webp';
import LongTerm2 from '../assets/services/long-term-2.webp';
import FormMain from '../components/FormMain';
import '../style/services/services.css';


const LongTerm = () => {
    return(
        <>
            <div className="wrapper-category">
                <section className="category-container">
                    <section className="category-container-heading">
                        <h1 className="title">Long Term</h1>
                    </section>
                </section>
            </div>

            <section className="wrapper-info">
                <section className="info-container">
                    <section className="info-text-container-left">
                        <h2 className="head">
                            Long Term Rental
                        </h2>
                        <p className="info">
                            Enjoy the convenience and luxury of our Long-Term Rental service, offering you a premium vehicle for 
                            as long as you need. Perfect for both business and leisure, our flexible rental options ensure you have 
                            the right car to suit your needs, without the commitments of ownership.
                        </p>
                        <Link className="cta" to="/contact-info">Contact us</Link>
                    </section>
                    <section className="img-info-container-right">
                        <section className="img-info">
                            <img src={LongTerm1} alt="fleet of car" />
                        </section>
                    </section>
                </section>
            </section>

            <section className="wrapper-text-banner">
                <section className="text-banner-container">
                    <h2 className="text">
                        AT Ride<i>Ready</i> WE PROVIDE LUXURY LONG-TERM RENTALS, 
                        OFFERING YOU THE FREEDOM AND FLEXIBILITY OF PREMIUM DRIVING.
                    </h2>
                </section>
            </section>

            <section className="wrapper-content">
                <section className="content-container">
                    <section className="text-container">
                        <p className="info">
                            Enjoy the freedom and convenience of our long-term rental services, designed for those who need 
                            a vehicle on their own terms. Whether you're staying for an extended period, working on a project, 
                            or simply prefer the comfort of having a vehicle without the commitments of ownership, we provide 
                            flexible solutions tailored to your needs.
                        </p>
                        <p className="info">
                            Our diverse fleet of well-maintained, high-quality vehicles ensures you'll have the perfect car 
                            for your lifestyle, with options for regular maintenance and support throughout your rental period. 
                            With competitive rates and customized plans, our long-term rentals offer both value and peace of mind, 
                            allowing you to drive in comfort, style, and confidence for as long as you need.
                        </p>
                    </section>
                    
                    <section className="img-content">
                        <img src={LongTerm2} alt="bentley interior drive" />
                    </section>
                </section>
            </section>
            <FormMain />
        </>
    )
}

export default LongTerm;