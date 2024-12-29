import Chief from '../../assets/about/chief-financial-officer.webp';
import '../../style/about/rides/rides.css';

const Rides = () => {
  return (
    <div className="content-wrapper">
        <section className="title-container">
                <h1 className="title">Rides</h1>
        </section>
        <section className="content-container">
            <section className="info-container">
                <p className="info">
                    Welcome to Ride<span>Ready</span>, where luxury meets the art of travel. 
                    We take pride in offering a carefully curated selection of the world’s most exclusive, 
                    high-performance vehicles, crafted to elevate your driving experience to new heights. 
                    Every car in our fleet has been handpicked to embody a seamless blend of elegance, comfort, 
                    and cutting-edge technology, ensuring that each journey becomes not only a drive but a 
                    memorable experience.
                </p>
                <p className="info">
                    At Ride<span>Ready</span>, we believe that true luxury lies in the details, 
                    which is why our mission is to make every rental an extraordinary journey. 
                    Our team of dedicated professionals strives to exceed expectations, providing 
                    a service that is both tailored to your unique needs and delivered with 
                    unmatched precision and discretion. Whether you’re attending a special event, 
                    embarking on a business trip, or seeking a lavish escape, our commitment to 
                    excellence ensures that your experience with us is smooth, sophisticated, 
                    and truly unforgettable.
                </p>
                <p className="info">
                    Experience the art of luxury driving with Ride<span>Ready</span> — where every mile, 
                    every moment, and every vehicle is designed to inspire.
                </p>
            </section>
            <section className="image-container">
                <img src={Chief} alt="Financial chief talking at the phone" />
            </section>
        </section>
    </div>
  )
}

export default Rides;
