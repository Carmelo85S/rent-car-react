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
import ScrollTop from './components/ScrollTop';

const App = () => { 
  return (
    <div>
      <BrowserRouter>
      <ScrollTop />
      <Navbar />
        <Routes>
          <Route path="/test" element={<Counter />} />
          <Route path="/color-picker" element={<ColorPicker/>} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cabriolet" element={<Cabriolet />} />
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
