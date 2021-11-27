import './assets/css/App.css';
import Header from "./pages/layouts/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nosotros from './pages/Nosotros';
import Servicios from './pages/Servicios';
import Contactenos from './pages/Contactenos'
import Pqr from './pages/Pqr'
import Recibo from './pages/Recibo'


const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contactenos" element={<Contactenos />} />
          <Route path="/pqr" element={<Pqr />} />
          <Route path="/centros-recibo" element={<Recibo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;