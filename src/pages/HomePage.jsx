import React from 'react'
import { Navbar, Note } from '../components'
import { Sidebar } from '../components/Sidebar/Sidebar'
import './pages.css'

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <div className='pg-cnt'>
          <Sidebar/>
          <Note/>
        </div>
    </div>
  )
}

export { HomePage }