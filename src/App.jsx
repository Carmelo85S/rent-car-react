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


const App = () => { 
  return (
    <div>
      <BrowserRouter>
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
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
