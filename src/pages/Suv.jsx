import {
  AudiQ8, 
  BmwX7, 
  Cadillac, 
  LexusLx, 
  MercedesG, 
  RangeRover
} from '../assets/suv/index';
import Title from '../components/Title';
import Suv from '../components/Car-card';

//import style for the page
import '../index.css';

//Create an objects array with all cars info
const suv = () => {
  const suvAuto = [
    { img: AudiQ8, title: "Audi Q8", info: "12000 SEK per day" },
    { img: BmwX7, title: "BMW X7", info: "1800 SEK per day" },
    { img: Cadillac, title: "Cadillac Escalade", info: "2000 SEK per day" },
    { img: LexusLx, title: "Lexus LX", info: "1000 SEK per day" },
    { img: MercedesG, title: "Mercedes G-Class", info: "1200 SEK per day" },
    { img: RangeRover, title: "Range Rover", info: "12000 SEK per day" }
  ];  

  //return the page
  return (

    // wrapper = full size of the page, serving as the container for the entire content
    <div className="wrapper">
      {/* Title component displaying the title "Cabriolet" */}
      <Title title="Suv"/>
      
      {/* card-container = container for the list of Cabriolet cards */}
      <div className="card-container">
        
        {/* Iterating through the 'cabriolets' array to create a Suv component for each car, pass the info as props */}
        {suvAuto.map((car, index) => (
          <Suv 
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

export default suv;
