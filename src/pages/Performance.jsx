import { 
    AstonMartin, 
    Bugatti, 
    Ferrari, 
    Koenigsegg, 
    McLaren, 
    Lamborghini 
  } from '../assets/performance/index';
  import Title from '../components/Title';
  import Performance from '../components/Car-card';
  
  //import style for the page
  import '../index.css';
  
  //Create an objects array with all cars info
  const performance = () => {
    const perform = [
      { img: AstonMartin, title: "Aston Martin", info: "12000 SEK per day", link: "/aston-p" },
      { img: Bugatti, title: "Bugatti Chiron", info: "1800 SEK per day", link: "/bugatti" },
      { img: Ferrari, title: "Ferrari 488", info: "3400 SEK per day", link: "/ferrari" },
      { img: Koenigsegg, title: "Koenigsegg Jesko", info: "10200 SEK per day", link: "/koenigsegg" },
      { img: McLaren, title: "McLaren 720S", info: "12000 SEK per day", link: "/mclaren" },
      { img: Lamborghini, title: "Lamborghini Huracán Evo", info: "12000 SEK per day", link:"/lamborghini" }
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
            <Performance 
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
  
  export default performance;
  