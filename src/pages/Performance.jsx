import { 
    AstonMartin, Bugatti, Ferrari, Koenigsegg, McLaren, Lamborghini
  } from '../assets/performance/index';
  import Title from '../components/Title';
  import Cabriolet from '../components/Car-card';
  
  //import style for the page
  import '../index.css';
  
  //Create an objects array with all cars info
  const performance = () => {
    const perform = [
      { img: AstonMartin, 
        title: "Aston Martin", 
        info: "12000 sek per day" 
      },
      { img: Bugatti, 
        title: "Bugatti Chiron", 
        info: "1800 sek per day" 
      },
      { img: Ferrari, 
        title: "Ferrari 488", 
        info: "3400 sek per day" 
      },
      { img: Koenigsegg, 
        title: "Koenigsegg", 
        info: "10200 sek per day" 
    },
      { img: McLaren, 
        title: "McLaren 720S", 
        info: "12000 sek per day" 
    },
      { img: Lamborghini, 
        title: "Lamborghini Huracan Evo", 
        info: "12000 sek per day" 
      }
    ];
  
    //return the page
    return (
  
      // wrapper = full size of the page, serving as the container for the entire content
      <div className="wrapper">
        {/* Title component displaying the title "Performance" */}
        <Title title="Performance"/>
        
        {/* card-container = container for the list of Performance cards */}
        <div className="card-container">
          
          {/* Iterating through the 'performances' array to create a Performance component for each car, pass the info as props */}
          {perform.map((car, index) => (
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
  
  export default performance;
  