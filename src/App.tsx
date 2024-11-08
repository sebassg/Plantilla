import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import PagInicio from './componentes/PagInicio';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/inicio" element={<PagInicio />} />
        <Route path="/servicios" element={<se/>} />
      </Routes>
    </Router>
  );
}

export default App;
