import React, { useState }from 'react'

function Numbrid() {
    const [numbrid, uuendaNumbrid ] = useState([4, 23, 7, 39, 19, 0, 9, 14]);

    const originaaliTagasi =() => {
        uuendaNumbrid([4, 23, 7, 39, 19, 0, 9, 14]);
    }

    const sorteeriEsimeneNumber = () => {
        numbrid.sort((a,b) => a.toString().localeCompare(b.toString));
        uuendaNumbrid(numbrid.slice())
    }

    const sorteeriVastupidiNumber = () => {
        numbrid.sort((b,a) => b.toString().localeCompare(a.toString())) ;
        uuendaNumbrid(numbrid.slice())
        
      
    }

    const sorteeriSuuruseJargiNumberKasv = () => {
        numbrid.sort((a,b) => a- b);
        uuendaNumbrid(numbrid.slice())
    }

    const sorteeriSuuruseJargiNumberKah = () => {
        numbrid.sort((a,b) =>  b - a);
        uuendaNumbrid(numbrid.slice())
    }

    const filreeriSuuremKui8 = () => {
        const vastus = numbrid.filter(e =>  e>8);
        uuendaNumbrid(vastus)
      }

      const filreeriVaiksemKui10 = () => {
        const vastus = numbrid.filter(e =>  e< 10);
        uuendaNumbrid(vastus)
      }

      const paarisArvud = () => {
        const vastus = numbrid.filter(e => e % 2 === 0);
        uuendaNumbrid(vastus);
    }

    const paaritudArvud = () => {
        const vastus = numbrid.filter(num => num % 2 !== 0);
        uuendaNumbrid(vastus);
    }

  return (
    <div>
        <button onClick={originaaliTagasi}>Tagasi originaal sättedesse</button>
        <br />
 <button onClick={sorteeriEsimeneNumber}>Esimene Number</button>
 <button onClick={sorteeriVastupidiNumber}>Vastupidises järjekorras Number</button>
 <button onClick={sorteeriSuuruseJargiNumberKasv}>Suuruse järjekorras Kasv</button>
 <button onClick={sorteeriSuuruseJargiNumberKah}>Suuruse järgi Number kahanev</button>

 <button onClick={filreeriSuuremKui8}>Suurem Number kui 8</button>
 <button onClick={filreeriVaiksemKui10}>Väiksem Number kui 10</button>
 <button onClick={paarisArvud}>Paaris arvud</button>
 <button onClick={paaritudArvud}>Paaritud arvud</button>

        {numbrid.map(e => <div>{e}</div>) }
        
        </div>
  )
}

export default Numbrid