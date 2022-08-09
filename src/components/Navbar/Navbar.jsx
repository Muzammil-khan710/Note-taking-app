import React from 'react'
import "../Navbar/navbar.css"
import { Profile } from './../../utils/SVG/Svg';

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <nav className='navbar'>My Notes app</nav>
        <Profile/>
    </div>
  )
}

export { Navbar }