import '../../style/home/hero/hero.css';

const HeroHome = () => {
    return(
        <div className="home-hero-wrapper">
            <section className="home-hero-container">
                <h1 className="home-title slide-in-title">
                    IGNITE YOUR SENSES
                </h1>
                <p className="home-info slide-in-info">
                    At RideReady, we believe in making every journey an unforgettable experience. 
                    Whether you're cruising through the city or embarking on a weekend adventure, 
                    our wide range of vehicles ensures you'll find the perfect ride.
                    With easy online booking and flexible rental options, you're just a few clicks 
                    away from hitting the road in style.
                </p>
            </section>
        </div>
    )
}

export default HeroHome;