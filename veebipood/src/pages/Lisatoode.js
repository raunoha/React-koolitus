import React, { useRef,useState } from 'react'
import tootedFailist from "..data/tooted.json"

function Lisatoode() {
    const [sonum, uuendaSonum] = useState("Lisa toode!");
const inputiLuger = useRef();  //ref loeb inputi seest väärtust
//const nimiRef = useRef
// const nimiViide = useRef()

    //function lisa () {}

    const lisa = () => {
        if  (inputiLuger.current.value === "") {
uuendaSonum("Toodet ei saa tühja nimega lisadda!");
        } else {
        uuendaSonum("Toode lisatud, nimega: "+ inputiLuger.current.value);
        tootedFailist.push(inputiLuger.current.value);
    }
    }


  return (
    <div>

    
    <div>{sonum}</div>
    <label htmlFor="">Uue toote nimi</label><br />
    <input ref={inputiLuger} type="text" /> <br />
    <button onClick={lisa}>Lisa</button> <br />
    </div>
  )
}

export default Lisatoode;