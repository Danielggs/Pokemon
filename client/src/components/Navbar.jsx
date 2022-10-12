import React from 'react'
import "./NavBar.css"
import {Link} from 'react-router-dom'

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
    <li><Link className="link" to='/home'><span>Inicio</span></Link></li>
      <li><Link className="link" to='/create'><span>Agregar Pokemion</span></Link></li>
      <li><Link className="link" to='#'><span>About me</span></Link></li>
      <li><Link className="link" to='#'><span>Contact</span></Link></li>
    </ul>
  </section>
  

    </div>
  )
}

export default Navbar