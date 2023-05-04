import React, { useState } from 'react'

function Hinnad() {
  const [hinnad, uuendaHinnad] = useState([64, 12, 52, 5, 87, 552, 123, 15]);
  const [kogusumma, uuendaKogusumma] =useState(0);
  
const sorteeriKasvavalt = () => {
  // 64 12 => 64-12=pluss vaheta koht

  hinnad.sort((a,b) => a - b);
  uuendaHinnad(hinnad.slice());
}


const filtreeriVaikemKui100 = ()=> {
const vastus =hinnad.filter(el => el < 100);
uuendaHinnad(vastus);
}

const arvutaKoikKokku = ( ) => {
  let summa = 0;  
  hinnad.forEach(el => summa = summa + el);
  uuendaKogusumma (summa);
}

const kustuta = (ix) => {
  hinnad.splice(ix,1)
  uuendaHinnad(hinnad.slice())
}

  return (
    <div>
      <div>{kogusumma} £</div>
      <button onClick={arvutaKoikKokku}>Arvuta</button>
      <br /><br />
      <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
      <button onClick={filtreeriVaikemKui100}>jäta alles väiksemad kui 100</button>
      {hinnad.map((el,ix) => <div>{el}<button onClick={() =>kustuta(ix)}>x</button></div>) }
    </div>
  )
}

export default Hinnad