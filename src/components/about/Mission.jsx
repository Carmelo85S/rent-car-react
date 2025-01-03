import Bentley from '../../assets/about/bentley.webp';
import Title from '../Title';
import '../../style/about/mission/mission.css';
const Mission = () => {
  return (
    <div className="mission-wrapper">
        <Title title="Our mission" />
        <section className="mission-content-container">
            <section className="image-container">
                <img src={Bentley} alt="orange bentley" />
            </section>
            <section className="info-container">
                <p className="info">
                    At Ride<span>Ready</span>, our mission is to redefine luxury travel through exceptional vehicle choices, 
                    impeccable service, and unwavering commitment to quality. We believe that every journey 
                    should be a memorable experience, marked by sophistication, comfort, and the thrill of the drive. 
                    From handpicking each vehicle to curating bespoke rental experiences, we strive to exceed 
                    expectations at every turn.
                </p>
                <p className="info">
                    Our aim is to offer more than just cars; we deliver an elevated driving experience tailored 
                    to meet the needs and desires of each client. Whether you’re in search of a high-performance drive, 
                    a stylish arrival at an event, or an elegant escape, our team is dedicated to turning your vision 
                    into reality. Every mile driven with Ride<span>Ready</span> is crafted with precision, integrity, 
                    and a passion for luxury.
                </p>
            </section>
        </section>
    </div>
  )
}

export default Mission;
