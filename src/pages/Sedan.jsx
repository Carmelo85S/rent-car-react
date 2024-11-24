import {
  AudiA8, 
  BmwS7, 
  Genesis, 
  JaguarXj, 
  LexusLs, 
  MercedesS
} from '../assets/sedan/index';
import Title from '../components/Title';
import Sedan from '../components/Car-card';

//import style for the page
import '../index.css';

//Create an objects array with all cars info
const sedan = () => {
  const sedanAuto = [
    { img: AudiA8, title: "Audi A8", info: "12000 SEK per day" },
    { img: BmwS7, title: "BMW 7 Series", info: "1800 SEK per day" },
    { img: Genesis, title: "Genesis G80", info: "2000 SEK per day" },
    { img: JaguarXj, title: "Jaguar XJ", info: "1000 SEK per day" },
    { img: LexusLs, title: "Lexus LS", info: "1200 SEK per day" },
    { img: MercedesS, title: "Mercedes S-Class", info: "12000 SEK per day" }
  ];

  //return the page
  return (

    // wrapper = full size of the page, serving as the container for the entire content
    <div className="wrapper">
      {/* Title component displaying the title "Sedan" */}
      <Title title="Sedan"/>
      
      {/* card-container = container for the list of Cabriolet cards */}
      <div className="card-container">
        
        {/* Iterating through the 'cabriolets' array to create a Sedan component for each car, pass the info as props */}
        {sedanAuto.map((car, index) => (
          <Sedan 
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

export default sedan;
