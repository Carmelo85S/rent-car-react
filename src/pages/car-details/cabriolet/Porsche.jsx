import Porsche911 from '../../../assets/car-details/cabriolet/porsche/porsche-911.webp';
import Title from '../../../components/Title';
import '../../../style/car-details/car-details.css'

const Porsche = () => {
  return (
    <div className='wrapper'>
        <section className="title-container">
            <Title title="PORSCHE 911 TURBO" />
        </section>
        <section className="hero-details">
            <section className="info-container">
                <p className="info">
                    Experience the perfect blend of power and sophistication with the Aston Martin DB12, 
                    a stunning achievement in British automotive craftsmanship available for your next journey.
                    This elite grand tourer boasts an impressive 671 horsepower, launching you from 0 to 100 km/h in 
                    just 3.5 seconds. The DB12 delivers a smooth yet thrilling performance, merging Aston Martin’s 
                    state-of-the-art engineering with an unmistakable elegance. Elevate your drive—rent the Aston Martin DB12
                    and savor the unmatched luxury and exhilaration of this super tourer.
                </p>
            </section>
            <section className="img-container">
                <img src={Porsche911} alt="Aston martin front aston-martin-booking-front-grid" />
            </section>
        </section>   
    </div>
  )
}

export default Porsche
