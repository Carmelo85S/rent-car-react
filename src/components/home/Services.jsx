import { Link } from 'react-router-dom';
import Chauffeur from '../../assets/home/services/chauffeur.webp';
import MonthlySub from '../../assets/home/services/monthly-sub.webp';
import Long from '../../assets/home/services/long-term.webp';
import Short from '../../assets/home/services/short-term.webp';
import PrivateLounge from '../../assets/home/services/private-lounge.webp';
import Wedding from '../../assets/home/services/wedding.webp';
import DriveExp from '../../assets/home/services/drive-experience.webp';
import DrivingTour from '../../assets/home/services/driving-tour.webp';
import Title from '../Title';
import '../../style/home/services/services.css';


const Services = () => {
    const servicesData = [
        {
            img: Chauffeur,
            title:'Chauffeur',
            info: 'Ensure your safety and comfort with an elegant touch to your journey.',
            link: '/chauffeur'
        },
        {
            img: MonthlySub,
            title:'Monthly Subscription',
            info: 'Experience the freedom of driving a different luxury vehicle every month.',
            link: '/monthly-sub'
        },
        {
            img: Long,
            title:'Long Term Rental',
            info: 'Perfect blend of luxury and reliability with our long-term car rental services.',
            link: '/long-term'
        },
        {
            img: Short,
            title:'Short Term Rental',
            info: 'Perfect for business trips or spontaneous adventures.',
            link: '/short-term'
        },
        {
            img: PrivateLounge,
            title:'Private Lounge',
            info: 'Enjoy exclusive access to private airport lounges when you rent with us.',
            link: '/private-lounge'
        },
        {
            img: Wedding,
            title:'Wedding',
            info:'Modern elegance to complement your celebration.',
            link:'/wedding'
        },
        {
            img: DriveExp,
            title:'Drive Experience',
            info:'Experience the thrill of speed on a professional racetrack!',
            link:'/speed-drive'
        },
        {
            img: DrivingTour,
            title:'Driving Tour',
            info:'Unforgettable adventure with our scenic driving tours!',
            link:'/driving-tour'
        }
    ];

    return(
        <div className="wrapper-services">
            <section className="title-container">
                <h1 className="title">Meet our team</h1>
            </section>
                <div className="services-card-container">
                {servicesData.map((service, index) =>
                <div key={index} className="service-card">
                    <img src={service.img} alt={service.title} className="service-image" />
                    <section className="info-container">
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-info">{service.info}</p>
                        <Link to={service.link}><button className="cta">Read More</button></Link>
                    </section>
                </div>
                )}
            </div>
        </div>
    )
}

export default Services;