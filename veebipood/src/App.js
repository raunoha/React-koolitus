//import logo from './logo.svg';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import Lisatoode from './pages/Lisatoode';
import Ostukorv from './pages/Ostukorv';
import { useState } from 'react';
import Meist from './pages/Meist';
import Seaded from './pages/Seaded';
import Hinnad from './pages/Hinnad';
import Tootajad from './pages/Tootajad';
import Poed from './pages/Poed';
import Boooks from './pages/Boooks';
import Numbrid from './pages/Numbrid';
import Tooted from './pages/Tooted';
import HaldaTooteid from './pages/HaldaTooteid';
import YksikToode from './pages/YksikToode';
import MuudaToode from './pages/MuudaToode';
// ctrl+ä on kommentaar mis nö kustutab koodi
// (kaks kaldkriipsu)aga jätab meile alles et hiljem vaadata




function App() {

  const [logimiseTekst, uuendaLogimiseTekst] = useState('Log In');
  // kui siit tuleb tõhjus siis || võta parem pool
  const [teema, uuendaTeema] = useState(localStorage.getItem("theme") || "hele-leht");

  const logIn = () => {
    if (logimiseTekst === "Log In") {
      uuendaLogimiseTekst('Log Out'); 
    } else {
      uuendaLogimiseTekst('Log In'); 
    }
  }


const muudaTumedasks = () => {
   uuendaTeema ("tume-leht");
   localStorage.setItem("theme", "tume-leht")
}
const muudaHeledaks = ()=> {
   uuendaTeema ("hele-leht")
   localStorage.setItem("theme", "hele-leht")

  }
  return (
    <div className={teema}>
   <button onClick={() => logIn()}>{logimiseTekst}</button>
   {/*<button>Log Out</button> */}
      {teema === "hele-leht" && <button onClick={ muudaTumedasks }>Tume leht</button>}
      {teema === "tume-leht" && <button onClick={muudaHeledaks}>Hele leht</button> }

      <Link to="/">
      <img className="pilt" src="https://upload.wikimedia.org/wikipedia/en/9/99/Nobe_GT100.jpg" alt="" />
      </Link>
      
      <Link to="/lisa-toode">
    <button className="nupp">Lisa toode</button>
    </Link>

    <Link to="/ostukorv">
    <button className="nupp">Ostukorv</button>
    </Link>
    
    <Link to="/about">
    <button className="nupp">Meie kontaktid</button>
    </Link>

    <Link to="/setting">
    <button className="nupp">Seaded</button>
    </Link>

    <Link to="/poed">
    <button className="nupp">Poed</button>
    </Link>

    <Link to="/hinnad">
    <button className="nupp">Hinnad</button>
    </Link>

    <Link to="/tootajad">
    <button className="nupp">Tootajad</button>
    </Link>

    <Link to="/boooks">
    <button className="nupp">Books</button>
    </Link>

    <Link to="/numbrid">
    <button className="nupp">Numbrid</button>
    </Link>

    <Link to="/tooted">
    <button className="nupp">Tooted</button>
    </Link>

    <Link to="/halda">
    <button className="nupp">HaldaTooted</button>
    </Link>
  
    <Routes>
      <Route path=""element={ <Avaleht /> } />
      <Route path="lisa-toode"element={ <Lisatoode />} />
      <Route path="ostukorv"element={ <Ostukorv />} />
      <Route path="about"element={ <Meist />} />
      <Route path="setting"element={ <Seaded />} />
      <Route path="tootajad"element={ <Tootajad />} />
      <Route path="poed"element={ <Poed />} />
      <Route path="hinnad"element={ <Hinnad />} />
      <Route path="boooks"element={ <Boooks />} />
      <Route path="numbrid"element={ <Numbrid />} />
      <Route path="tooted"element={ <Tooted />} />
      <Route path="halda"element={ <HaldaTooteid />} />
      <Route path="toode/:index" element={ <YksikToode />} />
      <Route path="muuda/:jrknr" element={ <MuudaToode />} />
    </Routes>

    </div>

  );
}

export default App;

// KAKS KOHTA errorite vaatamiseks:
// terminal ---> compile-time errors
// parem klõps -> inspect -> console ---> run-time errors

// algus ja lopu tagiga div,span,button,h1,h2,h3
//isesulguv self closing ; img input, route

//koik  HtML suuure täheda ja rohelisega peab importima