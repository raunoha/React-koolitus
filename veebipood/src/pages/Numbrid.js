import React, { useState }from 'react'

function Numbrid() {
    const [numbrid, uuendaNumbrid ] = useState([4, 23, 7, 39, 19, 0, 9, 14]);

    const sorteeriEsimeneNumber = () => {
        numbrid.sort((a,b) => a.toString().localeCompare(b.toString));
        uuendaNumbrid(numbrid.slice())
    }

    const sorteeriVastupidiNumber = () => {
       // numbrid.sort((a,b) => b.localeCompare(a)) ;
       // uuendaNumbrid(numbrid.slice())
    }

    const sorteeriSuuruseJargiNumberKasv = () => {
        numbrid.sort((a,b) => a.length - b.length);
        uuendaNumbrid(numbrid.slice())
    }

    const sorteeriSuuruseJargiNumberKah = () => {
        numbrid.sort((a,b) =>  b.length - a.length);
        uuendaNumbrid(numbrid.slice())
    }

    const filreeriSuuremKui8 = () => {
        const vastus = numbrid.filter(e =>  e>8);
        uuendaNumbrid(vastus)
      }

  return (
    <div>
 <button onClick={sorteeriEsimeneNumber}>Esimene Number</button>
 <button onClick={sorteeriVastupidiNumber}>Vastupidises järjekorras Number</button>
 <button onClick={sorteeriSuuruseJargiNumberKasv}>Vastupidises järjekorras Number</button>
 <button onClick={sorteeriSuuruseJargiNumberKah}>Vastupidises järjekorras Number</button>

 <button onClick={filreeriSuuremKui8}>Suurem Number kui 8</button>

        {numbrid.map(e => <div>{e}</div>) }
        
        </div>
  )
}

export default Numbrid