import React from 'react'
import { Link } from "react-router-dom"
import "../Landing-Page/content.css"
 
const Content = () => {
  return (
    <div className='content-container'>
        <div className='content-title'> This is your note taking application. </div>
        <div className='content-description'>Here you can easily add notes related to your daily tasks in an organized manner. </div>
        <div className='content-description'> All you need is to<Link className='link bb-2 l-hvr' to="/login"> Sign in</Link> or <Link className='link bb-2 l-hvr' to="/signup"> Create an account  </Link>.</div>
        <button className='content-btn btn-hover'><Link className='link' to="/home"> Get started</Link></button>
    </div>
  )
}

export { Content }