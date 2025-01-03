import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
import { redirect } from './redirect';

const App = () => {
  return (
    <div>
      <HashRouter>
        <ScrollTop />
        <Navbar />
        <Routes>
          {redirect.map((redirect, index) => (
            <Route key={index} path={redirect.path} element={redirect.element} />
          ))}
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
};

export default App;
