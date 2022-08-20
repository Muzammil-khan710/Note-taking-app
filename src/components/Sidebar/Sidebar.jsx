import React from 'react'
import { NavLink } from 'react-router-dom'
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className='side-container'>
        <NavLink className='side-link' to='/home'>Home</NavLink>
        <NavLink className='side-link'>Archive</NavLink>
        <NavLink className='side-link'>Trash</NavLink>
    </div>
  )
}

export { Sidebar }