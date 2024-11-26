import { Link } from 'react-router-dom';
import Wedding1 from '../assets/services/wedding-1.webp';
import Wedding2 from '../assets/services/wedding-2.webp';
import FormMain from '../components/FormMain';
import '../style/services/services.css';


const Wedding = () => {
    return(
        <>
            <div className="wrapper-category">
                <section className="category-container">
                    <section className="category-container-heading">
                        <h1 className="title">Wedding</h1>
                    </section>
                </section>
            </div>

            <section className="wrapper-info">
                <section className="info-container">
                    <section className="info-text-container-left">
                        <h2 className="head">
                            Elegance and luxury
                        </h2>
                        <p className="info">
                            Make your wedding day unforgettable with our luxury wedding car service. 
                            We provide a stylish, comfortable, and memorable experience for the bride, groom, and guests. 
                            Our chauffeurs are professionally trained, ensuring a smooth and timely journey for your special event.
                        </p>
                        <Link className="cta" to="/contact">Contact us</Link>
                    </section>
                    <section className="img-info-container-right">
                        <section className="img-info">
                            <img src={Wedding1} alt="A luxury Rolls royce front car" />
                        </section>
                    </section>
                </section>
            </section>

            <section className="wrapper-text-banner">
                <section className="text-banner-container">
                    <h2 className="text">
                    Ride<i>Ready</i> ENSURING A GRAND ENTRANCE AND PERFECT START TO YOUR NEW JOURNEY TOGETHER
                    </h2>
                </section>
            </section>

            <section className="wrapper-content">
                <section className="content-container">
                    <section className="text-container">
                        <p className="info">
                        Arrive in style with our elegant wedding car service, crafted to make your special day exceptional.
                        Our fleet includes only the finest, meticulously maintained vehicles, providing a luxurious atmosphere
                        as you travel to your ceremony or reception.
                        </p>
                        <p className="info">
                        Let our experienced chauffeurs take care of every detail, from a smooth ride to personalized service,
                        so you can focus on creating memories. Experience comfort, elegance, and reliability with every ride.
                        </p>
                    </section>
                    
                    <section className="img-content">
                        <img src={Wedding2} alt="Bride in front a luxurious wedding car" />
                    </section>
                </section>
            </section>
                <FormMain />
        </>
    )
}

export default Wedding;