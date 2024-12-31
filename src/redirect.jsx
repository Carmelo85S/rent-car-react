import Home from './pages/Home';
import About from './pages/About';
import Vehicle from './pages/Vehicle';
import ServicesPage from './pages/Services-page';
import Cabriolet from './pages/Cabriolet';
import Aston from './pages/car-details/cabriolet/Aston';
import Bmws8 from './pages/car-details/cabriolet/Bmws8';
import Bmwz4s from './pages/car-details/cabriolet/Bmwz4s';
import PorscheTurbo from './pages/car-details/cabriolet/Porsche';
import Mustang from './pages/car-details/cabriolet/Mustang';
import SpeedCat from './pages/Speed';
import AstonP from './pages/car-details/speed/AstonP';
import Bugatti from './pages/car-details/speed/Bugatti';
import Ferrari from './pages/car-details/speed/Ferrari';
import LamborghiniHuracan from './pages/car-details/speed/Lambo.jsx';
import Koenigssegg from './pages/car-details/speed/Koenigssegg';
import McLaren from './pages/car-details/speed/McLaren';
import Suv from './pages/Suv';
import AudiQ8 from './pages/car-details/suv/AudiQ8';
import RangeRover from './pages/car-details/suv/RangeRover';
import MercedesG from './pages/car-details/suv/MercedesG';
import LexusLx from './pages/car-details/suv/LexusLX';
import CadillacEscalade from './pages/car-details/suv/CadillacEscalade';
import BmwX7 from './pages/car-details/suv/BmwX7';
import Sedan from './pages/Sedan';
import MercedesS from './pages/car-details/sedan/MercedesS';
import AudiA8 from './pages/car-details/sedan/AudiA8';
import BmwS7 from './pages/car-details/sedan/BmwS7';
import GenesisG80 from './pages/car-details/sedan/GenesisG80';
import JaguarXJ from './pages/car-details/sedan/JaguarXj';
import LexusLs from './pages/car-details/sedan/LexusLs';
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
  { path: "/vehicle", element: <Vehicle /> },
  { path: "/service", element: <ServicesPage /> },
  { path: "/cabriolet", element: <Cabriolet /> },
  { path: "/aston", element: <Aston /> },
  { path: "/porsche", element: <PorscheTurbo /> },
  { path: "/mustang", element: <Mustang /> },
  { path: "/bmwz4s", element: <Bmwz4s /> },
  { path: "/bmws8", element: <Bmws8 /> },
  { path: "/speed", element: <SpeedCat /> },
  { path: "/aston-p", element: <AstonP /> },
  { path: "/bugatti", element: <Bugatti /> },
  { path: "/ferrari", element: <Ferrari /> },
  { path: "/lamborghini", element: <LamborghiniHuracan /> },
  { path: "/mclaren", element: <McLaren /> },
  { path: "/koenigsegg", element: <Koenigssegg /> },
  { path: "/suv", element: <Suv /> },
  { path: "/bmw-x7", element: <BmwX7 /> },
  { path: "/audi-q8", element: <AudiQ8 /> },
  { path: "/range-rover", element: <RangeRover /> },
  { path: "/cadillac-escalade", element: <CadillacEscalade /> },
  { path: "/lexus-lx", element: <LexusLx /> },
  { path: "/mercedes-class-g", element: <MercedesG /> },
  { path: "/sedan", element: <Sedan /> },
  { path: "/audi-a8", element: <AudiA8 /> },
  { path: "/bmw-s7", element: <BmwS7 /> },
  { path: "/genesis-g80", element: <GenesisG80 /> },
  { path: "/jaguar-xj", element: <JaguarXJ /> },
  { path: "/lexus-ls", element: <LexusLs /> },
  { path: "/mercedes-class-s", element:<MercedesS /> },
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
