//import logo from './logo.svg';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import Lisatoode from './pages/Lisatoode';
import Ostukorv from './pages/Ostukorv';

// ctrl+ä on kommentaar mis nö kustutab koodi
// (kaks kaldkriipsu)aga jätab meile alles et hiljem vaadata



function App() {
  return (
    <div className="App">
      <Link to="/">
      <img className="pilt" src="https://upload.wikimedia.org/wikipedia/en/9/99/Nobe_GT100.jpg" alt="" />
      </Link>
      
      <Link to="/lisa-toode">
    <button className="nupp">Lisa toode</button>
    </Link>

    <Link to="/ostukorv">
    <button className="nupp">Ostukorv</button>
    </Link>
    
  
    <Routes>
      <Route path=""element={ <Avaleht /> } />
      <Route path="lisa-toode"element={ <Lisatoode />} />
      <Route path="ostukorv"element={ <Ostukorv />} />
    </Routes>

    </div>

  );
}

export default App;

// algus ja lopu tagiga div,span,button,h1,h2,h3
//isesulguv self closing ; img input, route

//koik  HtML suuure täheda ja rohelisega peab importima