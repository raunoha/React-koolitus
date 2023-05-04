import React, { useState } from 'react'

// array , list, massiiv
// javascript massiiv
// sort, lowercase includes



function Tootajad() {
  const [tootajad, uuendaTootajad] = useState(["Maret Maripuu", "Meeli Miidla-Vanatalu", " Vadim Ivanov", " Kristel Abel", "Kristin Rammus", "Teele Sihtmäe"," Kristina Kukk"]);
const [kogusumma, uuendaKogusumma] = useState(0)

  const sorteeriAZ = () => {
  tootajad.sort();  // A-Z esitähe järgi
  uuendaTootajad(tootajad.slice());
}

  const filtreeriKellelOnRohkemKui12Tahte = () => {
    const vastus = tootajad.filter(e => e.length > 12); // kui on true siis jääb alles
    uuendaTootajad(vastus);
  }

  const arvutaKoikTahedKokku = ( ) => {
let summa = 0;  //const on muutujad millele ei saa teis tkorda võrdusmärgifa anda
                // let on muutuja aga saab teist korda väärtus anda
                //[,,] "maret"=>  5  =0+ 5
                //[,,] "meeli"=>  10  =5+ 5
                //[,,] "kristel"=>  22  =15+ 7
tootajad.forEach(e => summa = summa + e.length);
uuendaKogusumma (summa);

  }

  const kustuta =(i) => {
    tootajad.splice(i,1)
    uuendaTootajad(tootajad.slice())
  }

  
  return (
    <div>
      <div>Koik tähed kokku : {kogusumma} tk</div>
      <button onClick={arvutaKoikTahedKokku}>Arvuta</button>
      <br /><br />
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={filtreeriKellelOnRohkemKui12Tahte}>Jäta alles kellel on rohkem kui 12 tähte</button>
      { tootajad.map((e,i )=> <div>{e} <button onClick={() =>kustuta (i)}>x</button></div> ) }
      
      </div>
  )
}

export default Tootajad