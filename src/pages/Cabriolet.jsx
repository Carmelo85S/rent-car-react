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

//import style for the page
import '../index.css';

//Create an objects array with all cars info
const cabriolet = () => {
  const cabriolets = [
    { img: AstonMartin, 
      title: "Aston Martin", 
      info: "12000 sek per day" 
    },
    { img: Porsche, 
      title: "Porsche 911", 
      info: "1800 sek per day" 
    },
    { img: BmwS8, 
      title: "BMW S8", 
      info: "2000 sek per day" 
    },
    { img: BmwZ4, 
      title: "BMW Z4", 
      info: "1000 sek per day" },
    { img: Mustang, 
      title: "Ford Mustang", info: "1200 sek per day" },
    { img: Maserati, 
      title: "Maserati", 
      info: "12000 sek per day" 
    }
  ];

  //return the page
  return (

    // wrapper = full size of the page, serving as the container for the entire content
    <div className="wrapper">
      {/* Title component displaying the title "Cabriolet" */}
      <Title title="Cabriolet"/>
      
      {/* card-container = container for the list of Cabriolet cards */}
      <div className="card-container">
        
        {/* Iterating through the 'cabriolets' array to create a Cabriolet component for each car, pass the info as props */}
        {cabriolets.map((car, index) => (
          <Cabriolet 
            key={index}
            img={car.img} 
            title={car.title}
            info={car.info}
          />
        ))}
      </div>
    </div>
  );
}

export default cabriolet;
