import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Counter from './pages/Counter';
import ColorPicker from './pages/ColorPicker';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import Cabriolet from './pages/Cabriolet';
import Performance from './pages/Performance';
import Suv from './pages/Suv';
import Sedan from './pages/Sedan';
import Chaffeur from './pages/Chauffeur';
import ShortTerm from './pages/ShortTerm';
import LongTerm from './pages/LongTerm';
import PrivateLounge from './pages/PrivateLounge';
import Wedding from './pages/Wedding';
import SpeedDrive from './pages/SpeedDrive';
import DrivingTour from './pages/DrivingTour';
import MonthlySub from './pages/MonthlySub';
import ContactInfo from './pages/ContactInfo';
import ToDoList from './pages/ToDoList';
import ScrollTop from './components/ScrollTop';
import Aston from './pages/car-details/cabriolet/Aston';
import Bmws8 from './pages/car-details/cabriolet/Bmws8';
import Bmwz4 from './pages/car-details/cabriolet/Bmwz4';
import Maserati from './pages/car-details/cabriolet/Maserati';
import Porsche from './pages/car-details/cabriolet/porsche';
import Mustang from './pages/car-details/cabriolet/Mustang';

const App = () => { 
  return (
    <div>
      <BrowserRouter>
      <ScrollTop />
      <Navbar />
        <Routes>
          <Route path="/test" element={<Counter />} />
          <Route path="/color-picker" element={<ColorPicker/>} />
          <Route path="/to-do-list" element={<ToDoList/>} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cabriolet" element={<Cabriolet />} />
          <Route path="/aston" element={<Aston />} />
          <Route path="/porsche" element={<Porsche />} />
          <Route path="/maserati" element={<Maserati />} />
          <Route path="/mustang" element={<Mustang />} />
          <Route path="/bmwz4" element={<Bmwz4 />} />
          <Route path="/bmws8" element={<Bmws8 />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/suv" element={<Suv />} />
          <Route path="/sedan" element={<Sedan />} />
          <Route path="/chauffeur" element={<Chaffeur />} />
          <Route path="/monthly-sub" element={<MonthlySub />} />
          <Route path="/long-term" element={<LongTerm />} />
          <Route path="/short-term" element={<ShortTerm />} />
          <Route path="/private-lounge" element={<PrivateLounge />} />
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/speed-drive" element={<SpeedDrive />} />
          <Route path="/driving-tour" element={<DrivingTour />} />
          <Route path="/contact-info" element={<ContactInfo />} />
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
