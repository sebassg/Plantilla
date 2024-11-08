import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import PagInicio from './componentes/PagInicio';
import Servicios from './componentes/servicios';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/inicio" element={<PagInicio />} />
        <Route path="/servicios" element={<Servicios/>} />
      </Routes>
    </Router>
  );
}

export default App;
