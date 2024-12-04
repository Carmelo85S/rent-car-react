import { Link } from 'react-router-dom';
import Monthly1 from '../assets/services/monthly-1.webp';
import Monthly2 from '../assets/services/monthly-2.webp';
import FormMain from '../components/FormMain';
import '../style/services/services.css';


const MonthlySub = () => {
    return(
        <>
            <div className="wrapper-category">
                <section className="category-container">
                    <section className="category-container-heading">
                        <h1 className="title">Monthly Subscription</h1>
                    </section>
                </section>
            </div>

            <section className="wrapper-info">
                <section className="info-container">
                    <section className="info-text-container-left">
                        <h2 className="head">
                            MONTHLY SUBSCRIPTION
                        </h2>
                        <p className="info">
                            Experience the convenience and luxury of our Monthly Subscription service. Enjoy a premium vehicle for 
                            as long as you need, without the long-term commitment. Perfect for both business and personal use, our 
                            flexible plans allow you to drive the car of your choice while keeping the freedom to adjust your selection 
                            at any time.
                        </p>
                        <Link className="cta" to="/contact-info">Contact us</Link>
                    </section>
                    <section className="img-info-container-right">
                        <section clclassNameass="img-info">
                            <img src={Monthly1} alt="audi driving interior" />
                        </section>
                    </section>
                </section>
            </section>

            <section className="wrapper-text-banner">
                <section className="text-banner-container">
                    <h2 className="text">
                        AT Ride<i>Ready</i> WE PROVIDE LUXURY MONTHLY SUBSCRIPTIONS, 
                    OFFERING YOU THE FREEDOM AND FLEXIBILITY OF PREMIUM DRIVING.
                    </h2>
                </section>
            </section>

            <section className="wrapper-content">
                <section className="content-container">
                    <section className="text-container">
                        <p className="info">
                            Enjoy the ultimate flexibility with our Monthly Subscription service. Whether you need a car for 
                            a few weeks, months, or longer, we have the perfect solution for you. No need for long-term commitments 
                            or ownership worries. Just select the car that suits your needs and drive away with complete freedom.
                        </p>
                        <p className="info">
                            Our fleet includes a variety of well-maintained, high-end vehicles that will meet every requirement 
                            and preference. With regular maintenance and dedicated support throughout your subscription, you can 
                            enjoy the ride without the hassle. Affordable pricing and flexible options ensure that luxury driving 
                            is within your reach.
                        </p>
                    </section>
                    
                    <section className="img-content">
                        <img src={Monthly2} alt="woman driving a cabriolet car" />
                    </section>
                </section>
            </section>
                <FormMain />
        </>
    )
}

export default MonthlySub;