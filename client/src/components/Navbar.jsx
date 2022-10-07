import React from 'react'
import "./NavBar.css"

const Navbar = () => {
  return (
    <div className="container" >
         <section className="top-nav">
    <div>
      Logo Here
      <h1>&#128514;</h1>
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label className='menu-button-container' for="menu-toggle">
    <div className='menu-button'></div>
  </label>
    <ul className="menu">
      <li><span>Inicio</span></li>
      <li><span>Agregar Pokemon</span></li>
      <li><span>About me</span></li>
      <li><span>Contact</span></li>
    </ul>
  </section>
  

    </div>
  )
}

export default Navbar