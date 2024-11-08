import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import PagInicio from './componentes/PagInicio';
import Servicios from './componentes/servicios';
import Nosotros from './componentes/Nosotros'; 


function App() {
  return ( <>
  
    <Router>
      <Routes>
        <Route path="/inicio" element={<PagInicio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/nosotros" element={<Nosotros />} /> {}
      </Routes>
    </Router>
  </>
  );
}

export default App;
