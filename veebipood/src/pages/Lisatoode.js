import React, { useRef,useState } from 'react'
import tootedFailist from "../data/tooted.json"

function Lisatoode() {
    const [sonum, uuendaSonum] = useState("Lisa toode!");
const inputiLuger = useRef();  //ref loeb inputi seest väärtust
//const nimiRef = useRef
// const nimiViide = useRef()
const hindViide= useRef();
const piltViide= useRef();
const aktiivneViide= useRef();
    //function lisa () {}

    const lisa = () => {
        if  (inputiLuger.current.value === "") {
uuendaSonum("Toodet ei saa tühja nimega lisadda!");
        } else {
        uuendaSonum("Toode lisatud, nimega: " + inputiLuger.current.value);
        
        const uusToode = {
          "nimi": inputiLuger.current.value,
          "hind": Number(hindViide.current.value),
          "aktiivne":aktiivneViide.current.checked, 
          "pilt": piltViide.current.value
        }
        tootedFailist.push(uusToode);  
        //tootedFailist.push("cats","dogs")
    }
    }


  return (
    <div>
    <div>{sonum}</div>
    <label >Uue toote nimi</label><br />
    <input ref={inputiLuger} type="text" /> <br />
    <label >Uue toote hind</label><br />
    <input ref={hindViide} type="number" /> <br />
    <label >Uue toote pilt</label><br />
    <input ref={piltViide} type="text" /> <br />
    <label >Uue toote aktiivsus</label><br />
    <input ref={aktiivneViide} type="checkbox" /> <br />
    <button onClick={lisa}>Lisa</button> <br />
    </div>
  )
}

export default Lisatoode;