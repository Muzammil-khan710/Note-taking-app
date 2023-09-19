import React from 'react'
import "../Navbar/navbar.css"
import { Profile } from './../../utils/SVG/Svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <Link to="/" className='navbar nav-link'>My Notes app</Link>
        <div className='sh-link'>
            <Link to="/archive" className='navbar nav-link'>Archive</Link>
            <Link to="/trash" className='navbar nav-link'>Trash</Link>
        </div>
        <Profile/>
    </div>
  )
}

export { Navbar }