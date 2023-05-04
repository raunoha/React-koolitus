// rfce
import React, { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

function Seaded() {
const [keel, uuendaKeel] = useState(localStorage.getItem("keel")); // null ja undefineed on tühjused
const aadressRef = useRef()
const emailRef = useRef();
const telefonRef = useRef ();

const salvestaAadress = () => {
    if (aadressRef.current.value === "") {
        toast("Tühja aadressi ei saa salvestada!");
        return; // funktsioon siit kohast enam edasi ei lähe
      }  // Tammsaare         T                       ===       t
      if (aadressRef.current.value[0].toLowerCase() ===  aadressRef.current.value[0]) {
        toast("Väikse algustähega aadressi ei saa salvestada!");
        return;
      }
   
localStorage.setItem("aadress", aadressRef.current.value);
toast.success("Aadress sisestatud!");
}


const salvestaEmail = () => {
    if (emailRef.current.value === "") {
        toast.error("Tühja emaili ei saa salvestada!");
        return; 
      }  
      if (emailRef.current.value.includes("@")=== false) {
        toast.error("Kontrolli emaili õigsust!");
        return;
    }
    localStorage.setItem("email", emailRef.current.value);
    toast.success("Email sisestatud!");
}

const salvestaTelefon = () => {
    if (telefonRef.current.value === "") {
        toast.eror("Tühja telefoni ei saa salvestada!");
        return; 
      }  
      if (/^[0-9]*$/.test(telefonRef.current.value)=== false) {
        toast.error("Telefoni number peab koosnema numbritest!");
        return;
    }
    localStorage.setItem("telefon", telefonRef.current.value);
    toast.success("Telefon sisestatud!");
}

const muudaKeelEst= () => {
     uuendaKeel("est")
    localStorage.setItem("keel" , "est")
}

const muudaKeelEng= () => {
     uuendaKeel("eng")
     localStorage.setItem("keel" , "eng")
}

const muudaKeelRus= () => {
     uuendaKeel("rus")
     localStorage.setItem("keel" , "rus")
}


  return (
    <div>
        <label >Aadress</label>
        <input ref={aadressRef} type="text" />
        <button onClick= {salvestaAadress}>Salvesta</button>
        <br /><br />

        <label >Email</label>
        <input ref={emailRef} type="text" />
        <button onClick= {salvestaEmail}>Salvesta</button>
        <br /><br />

        <label >Telefon</label>
        <input ref={telefonRef} type="text" />
        <button onClick= {salvestaTelefon}>Salvesta</button>
        <br /><br />


  
  <button onClick={muudaKeelEst}>Eesti keelseks </button>
  <button onClick={muudaKeelEng}>To english</button>
  <button onClick={muudaKeelRus}>Pycckkuj</button>
  
   {keel === null && <div>Vali keel </div>}
   {keel === "est" && <div>Leht on eesti keelne</div>}
   {keel === "eng" && <div>page is in English</div>}
   {keel === "rus" && <div>Pycckkuj rsõk</div>}
   <ToastContainer 
   position="bottom-right"
   />
    </div>
  )
}

export default Seaded;