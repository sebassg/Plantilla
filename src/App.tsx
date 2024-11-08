import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import PagInicio from './componentes/PagInicio';
import Service from "./componentes/Service"
import Nosotros from './componentes/Nosotros'; 
import Contact from './componentes/Contact';


function App() {
  return ( <>
  
    <Router>
      <Routes>
        <Route path="/inicio" element={<PagInicio />} />
        <Route path="/servicios" element={<Service />} />
        <Route path="/nosotros" element={<Nosotros />} /> 
        <Route path="/Contactanos" element={<Contact />} /> 
      </Routes>
    </Router>
  
  </>
  
  );
}

export default App;
