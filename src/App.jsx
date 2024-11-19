import AstonMartin from './assets/cabriolet/aston-martin.jpg';
import Genesis from './assets/cabriolet/genesis-g90.jpg';
import BmwS8 from './assets/cabriolet/bmw-8.jpg';
import BmwZ4 from './assets/cabriolet/bmw-z4.jpg';
import Mustang from './assets/cabriolet/ford-mustang.jpg';
import Maserati from './assets/cabriolet/Maserati.jpg';
import Cabriolet from './components/Cabriolet';
import './index.css';

function App() {
  return (
    <div className="card-wrapper">
      <div className="card-container">
        <Cabriolet img={AstonMartin} title="Aston Martin" info="12000 sek per day" />
        <Cabriolet img={Genesis} title="Genesis G90" info="12000 sek per day" />
        <Cabriolet img={BmwS8} title="BMW S8" info="2000 sek per day" />
        <Cabriolet img={BmwZ4} title="BMW Z4" info="1000 sek per day" />
        <Cabriolet img={Mustang} title="Ford Mustang" info="1200 sek per day" />
        <Cabriolet img={Maserati} title="Maserati" info="12000 sek per day" />
      </div>
    </div>
  );
}

export default App;
