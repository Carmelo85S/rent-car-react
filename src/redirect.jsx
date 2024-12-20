import Home from './pages/Home';
import About from './pages/About';
import Cabriolet from './pages/Cabriolet';
import Aston from './pages/car-details/cabriolet/Aston';
import Bmws8 from './pages/car-details/cabriolet/Bmws8';
import Bmwz4s from './pages/car-details/cabriolet/Bmwz4s';
import PorscheTurbo from './pages/car-details/cabriolet/Porsche';
import Mustang from './pages/car-details/cabriolet/Mustang';
import Performance from './pages/Performance';
import AstonP from './pages/car-details/performance/AstonP';
import Bugatti from './pages/car-details/performance/Bugatti';
import Ferrari from './pages/car-details/performance/Ferrari';
import LamborghiniHuracan from './pages/car-details/performance/lamborghiniHuracan';
import Koenigssegg from './pages/car-details/performance/Koenigssegg';
import McLaren from './pages/car-details/performance/McLaren';
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

export const redirect = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/cabriolet", element: <Cabriolet /> },
  { path: "/aston", element: <Aston /> },
  { path: "/porsche", element: <PorscheTurbo /> },
  { path: "/mustang", element: <Mustang /> },
  { path: "/bmwz4s", element: <Bmwz4s /> },
  { path: "/bmws8", element: <Bmws8 /> },
  { path: "/performance", element: <Performance /> },
  { path: "/aston-p", element: <AstonP /> },
  { path: "/bugatti", element: <Bugatti /> },
  { path: "/ferrari", element: <Ferrari /> },
  { path: "/lamborghini", element: <LamborghiniHuracan /> },
  { path: "/mclaren", element: <McLaren /> },
  { path: "/koenigsegg", element: <Koenigssegg /> },
  { path: "/suv", element: <Suv /> },
  { path: "/sedan", element: <Sedan /> },
  { path: "/chauffeur", element: <Chaffeur /> },
  { path: "/monthly-sub", element: <MonthlySub /> },
  { path: "/long-term", element: <LongTerm /> },
  { path: "/short-term", element: <ShortTerm /> },
  { path: "/private-lounge", element: <PrivateLounge /> },
  { path: "/wedding", element: <Wedding /> },
  { path: "/speed-drive", element: <SpeedDrive /> },
  { path: "/driving-tour", element: <DrivingTour /> },
  { path: "/contact-info", element: <ContactInfo /> },
];
