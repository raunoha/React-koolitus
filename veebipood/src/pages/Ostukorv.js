import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ostukorvFailist from "../data/ostukorv.json"

function Ostukorv() {
  const [ostukorv, uuendaOstukorv] = useState(ostukorvFailist);

const kustuta = (index) => {
ostukorv.splice(index,1);
uuendaOstukorv(ostukorvFailist.slice());
}

  return (
    <div>
      {ostukorv.lenght > 0 && <div>Ostukorvis on {ostukorv.lenght} eset </div>}
      {ostukorv.map((toode, index) => <div>{toode} <button onClick={ () => kustuta(index)}>x</button></div>)}
      { ostukorv.lenght === 0 && <div>Ostukorv on tühi. <Link to="/">Tooteid lisama</Link></div>}
    </div>
  )
}

export default Ostukorv