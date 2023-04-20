//rfce
import React, { useState } from 'react'

function Avaleht() {
    const [kogus,uuendaKogus] = useState(12);
    const [syda, uuendaSyda] = useState(false); // 0
    const [sonum, uuendaSonum] = useState("Uuenda kogust!");

    function nulli(){
        uuendaKogus(0);
        uuendaSonum("Panid tagasi nulli!");
    }

    function vahenda(){
        uuendaKogus(kogus - 1);
        uuendaSonum("Vähenda kogust!");
    }

    function suurenda(){
         uuendaKogus(kogus + 1);
        uuendaSonum("Suurendasid kogust!");
    }

  return (
    <div>
      {syda=== true && <img src="/syda.svg" alt="" />}
      {syda === false &&<img src="/syda mittelaigitud.svg" alt="" />}
<span>{syda + 0}</span>
<button onClick={() => uuendaSyda(true)}>Muuda laigituks</button>
<button onClick={() => uuendaSyda(false)}>Muuda mittelaigitud</button>

<br/>
<br/>

<div>{sonum}</div>
        {kogus!== 0 && <button onClick={nulli}>Tagasi nulli</button>}
        <button onClick={vahenda}>-</button>
        <span>kogus:{kogus}tükki </span>
        <button onClick={suurenda}>+</button>
    </div>
  )
}

export default Avaleht