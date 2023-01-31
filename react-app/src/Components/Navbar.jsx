import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
       <NavLink to='/' className='link'>
        <img src="https://static.wixstatic.com/media/a16c70_66558d16022144629d4d1d073893825b~mv2.jpg/v1/fill/w_109,h_91,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Shutterstock_1990228940.jpg" alt=''/>
        <h1 id="title">Twin Leaves</h1>
       </NavLink>
    </div>
  )
}

export default Navbar
