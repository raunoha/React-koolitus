import React, { useState } from 'react'
import poedFailist from "../data/poed.json";


function Poed() {
  const [poed, uuendaPoed] = useState(poedFailist)
  
const tagasi= () => {
  uuendaPoed (poedFailist);
}

  const sorteeriAZ = () => {
poed.sort((a,b) => a.localeCompare(b));
uuendaPoed(poed.slice())
  }

  const sorteeriZA = () => {
    poed.sort((a,b) => b.localeCompare(a));
uuendaPoed(poed.slice())
  }

  const sorteeriTahedKasv = () => {
    poed.sort((a,b) => a.length - b.length);
    uuendaPoed(poed.slice())
    
  }
  const sorteeriTahedKah = () => {
    poed.sort((a,b) =>  b.length - a.length);
    uuendaPoed(poed.slice())
  }
  const sorteeriKolmasTahtAZ = () => {              //012
    poed.sort((a,b) => a[2].localeCompare(b[2]) ); //ülemist
    uuendaPoed(poed.slice())
  }

  const filreeriSisalabIsLyhendit = () => {
    const vastus = poed.filter(yksPood =>  yksPood.includes("is"));
    uuendaPoed(vastus)
  }

  const filreeriKolmasTahtI = () => {
    const vastus = poed.filter(yksPood =>  yksPood[2] === "i");
    uuendaPoed(vastus)
  }

  const filreeriL6pebEga = () => {
    const vastus = poed.filter(yksPood =>  yksPood.endsWith("e"));
    uuendaPoed(vastus)
  }

  const kustuta =(jrknr)=> {
    poed.splice(jrknr,1)
    uuendaPoed(poed.slice())
  }

  const filreeriSuuremKui7= () => {
    const vastus =poed.filter(yksPood =>  yksPood.length > 7);
  uuendaPoed(vastus)
    }


  const filreeriVordne9= () => {
  const vastus =poed.filter(yksPood =>  yksPood.length === 9);
uuendaPoed(vastus)
  }

  const filreeriVaiksemKui7= () => {
    const vastus =poed.filter(yksPood =>  yksPood.length < 7);
  uuendaPoed(vastus)
    }


  return (
    <div>
      <br />
      <button onClick= {tagasi}>Reseti filterid</button>
      <div>Pood on :{poed.length} tk</div>
      <br />
      <button onClick= {sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick= {sorteeriZA}>Sorteeri Z-A</button>
      <button onClick= {sorteeriTahedKasv}>Sorteeri tähtede arv kasvavalt</button>
      <button onClick= {sorteeriTahedKah}>Sorteeri tähtede arv kahanevalt</button>
      <button onClick= {sorteeriKolmasTahtAZ}>Sorteeri kolmas täht</button>
      <br />
      <button onClick= {filreeriSisalabIsLyhendit}>Is lühend</button>
      <br />
      <button onClick= {filreeriKolmasTahtI}>Kolmas täht on "i"</button>
      <br />
      <button onClick= {filreeriL6pebEga}>Lõppeb "e"ga</button>
      <br />
      <button onClick= {filreeriVordne9}>9</button>
      <button onClick= {filreeriSuuremKui7}>7</button>
      <button onClick= {filreeriVaiksemKui7}>Väiksem kui 7</button>
      
      <br />
      {poed.map((yksPood,jrknr) => <div>{yksPood} <button onClick={() => kustuta(jrknr)}>x</button></div>)}
      
      </div>
  )
}

export default Poed