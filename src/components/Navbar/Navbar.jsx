import React from 'react'
import "../Navbar/navbar.css"
import { Profile } from './../../utils/SVG/Svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <Link to="/" className='navbar'>My Notes app</Link>
        <Profile/>
    </div>
  )
}

export { Navbar }