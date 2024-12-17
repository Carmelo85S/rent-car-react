import { 
  AstonMartin, 
  Porsche, 
  BmwS8, 
  BmwZ4, 
  Mustang, 
  Maserati 
} from '../assets/cabriolet/index';
import Title from '../components/Title';
import Cabriolet from '../components/Car-card';
import '../index.css';

const cabriolet = () => {
  const cabriolets = [
    { img: AstonMartin, title: "Aston Martin", info: "12000 SEK per day", link: "/aston" },
    { img: Porsche, title: "Porsche 911", info: "1800 SEK per day", link: "/porsche"  },
    { img: BmwS8, title: "BMW S8", info: "2000 SEK per day", link: "/bmws8"  },
    { img: BmwZ4, title: "BMW Z4", info: "1000 SEK per day", link: "/bmwz4s"  },
    { img: Mustang, title: "Ford Mustang", info: "1200 SEK per day", link: "/mustang"  },
  ];

  return (
    <div className="wrapper">
      <Title title="Cabriolet"/>
      
      <div className="card-container">
        
        {cabriolets.map((car, index) => (
          <Cabriolet 
            key={index}
            img={car.img} 
            title={car.title}
            info={car.info}
            link={car.link}
          />
        ))}
      </div>
    </div>
  );
}

export default cabriolet;
