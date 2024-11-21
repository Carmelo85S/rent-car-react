import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Test from './pages/Test';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import Cabriolet from './pages/Cabriolet';
import Performance from './pages/Performance';


const App = () => { 
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/test" element={<Test />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cabriolet" element={<Cabriolet />} />
          <Route path="/performance" element={<Performance />} />
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
