import '../../style/home/RentalSweden/rental.css';
import Car from '../../assets/home/rental/car-on-the-road.webp';
import Landscape from '../../assets/home/rental/landscape.webp';
import Panorama from '../../assets/home/rental/panorama.webp'
import Title from '../Title';

const Rental = () => {
    return(
        <div className='rental-wrapper'>
            <Title title="Rental in Sweden"/>
            <section className="rental-container">
                <section class="info-container">
                    <p className ="info">
                        Are you planning a visit to Sweden? Discover the charm of this Nordic gem 
                        with our premium car rental services. We know that comfortable and reliable 
                        transportation is essential for an unforgettable trip, and our dedicated team 
                        is here to ensure your experience is nothing short of exceptional.
                    </p>
                    <p className ="info">
                        Upon your arrival at the airport, our professional staff will be waiting to 
                        assist you with a warm welcome. We offer a streamlined booking process, 
                        enabling you to reserve your dream car in advance or arrange for a convenient on-the-spot rental. 
                        Our competitive pricing and flexible rental terms cater to both short getaways and extended stays.
                    </p>
                    <p className ="info">
                        Sweden is a land of stunning landscapes and rich culture, best explored at your own pace. 
                        Whether you’re driving through the picturesque streets of Stockholm, cruising along the 
                        serene lakes of Dalarna, or venturing into the majestic forests of Lapland, our luxury vehicles 
                        provide the perfect way to experience Sweden's beauty.
                    </p>
                    <p className ="info">
                        With our premium car rental services, you can enjoy the freedom to explore iconic landmarks, 
                        charming villages, and breathtaking nature without the constraints of public transportation. 
                        Let us take care of your transportation needs, so you can focus on creating unforgettable 
                        memories during your journey through Sweden. Experience luxury, reliability, and the thrill 
                        of the open road with us!
                    </p>
                </section>
                <section className="img-container">
                    <section className="img">
                        <img src={Car} alt="Car on the road" />
                    </section>
                    <section className="img-right">
                        <img src={Panorama} alt="High view of a road in the middle of a forest" />
                    </section>
                </section>
            </section>
        </div>
    )
}

export default Rental;