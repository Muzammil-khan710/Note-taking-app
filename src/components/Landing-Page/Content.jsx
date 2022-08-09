import React from 'react'
import "../Landing-Page/content.css"
 
const Content = () => {
  return (
    <div className='content-container'>
        <div className='content-title'> This is your note taking application. </div>
        <div className='content-description'>Here you can easily add notes related to your daily tasks in an organized manner. </div>
        <div className='content-description'> All you need is to create an account.</div>
        <button className='content-btn'>Get started</button>
    </div>
  )
}

export default Content