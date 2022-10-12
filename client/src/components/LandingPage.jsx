import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'



const LandingPage = () => {
  return (
    <div >
    <h1>  Welcome To World Pokemon</h1>
    <Link to='/home'>
      <button>Let Go</button>
    </Link>
        
</div>
  )
}



export default LandingPage