import React, { useState } from 'react'

function Boooks() {
    const [books, uuendaRaamatud] = useState (["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick"," Kalapoeg Klaus", "Mis on minu sees", "The Handbook"]);

const originaaliTagasi =() => {
  uuendaRaamatud(["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick"," Kalapoeg Klaus", "Mis on minu sees", "The Handbook"])
}

    const sorteeriEsimenetäht = () => {
        books.sort((a,b) => a.localeCompare(b));
        uuendaRaamatud(books.slice())
    }
    const sorteeriVastupidineJärjeKordesimeseTäht = () => {
        books.sort((a,b) => a.localeCompare(b)* -1);
        uuendaRaamatud(books.slice())
    }
    const sorteeriSonaPikkusejärgi = () => {
       books.sort((a,b) => a.length - b.length);
    uuendaRaamatud(books.slice())

    }
    const sorteeriSonaArvujärgi = () => {
           books.sort((a, b) => a.split(" ").length - b.split(" ").length);
         uuendaRaamatud(books.slice());

    }

    const filreeriThegaalgav = () => {
        const filteredBooks = books.filter(book => book.startsWith("The"));
        uuendaRaamatud(filteredBooks);
      }
      
      const filreeriANDkeskel = () => {
        const filteredBooks = books.filter(book => book.includes("and"));
        uuendaRaamatud(filteredBooks);
      }
      
     
      
      const filreeriRohkemTahemarkekui10 = () => {
        const vastus = books.filter(e =>  e.length> 10);
        uuendaRaamatud(vastus);
      }
      const filreeriVahemTahtiKui7 = () => {
        const vastus = books.filter(e =>  e.length <7 );
        uuendaRaamatud(vastus);
      }

   // suurem/võrdne kui 7 tähte

  // võrdne 9 tähega


  return (
    <div>
      <button onClick={originaaliTagasi}>Tagasi originaal sättedesse</button>
        <br />
        <button onClick={sorteeriEsimenetäht}>Esimene Täht</button>
        <button onClick={sorteeriVastupidineJärjeKordesimeseTäht}>Vastupidine järjekord</button>
        <button onClick={sorteeriSonaPikkusejärgi}>Sõna pikkus</button>
        <button onClick={sorteeriSonaArvujärgi}>Sõna arvu järgi</button>

        <button onClick={filreeriThegaalgav}>Algab THE-ga</button>
        <button onClick={filreeriANDkeskel}>AND keskel</button>
        <button onClick={filreeriRohkemTahemarkekui10}>Rohkemate tähemärkidega sõnad kui 10</button>
        <button onClick={filreeriVahemTahtiKui7}>Vähemate tähemärkide sõnad kui 7</button>
        {books.map(e => <div>{e}</div>) }
    </div>
  )
}

export default Boooks;