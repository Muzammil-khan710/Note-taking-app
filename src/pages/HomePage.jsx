import React from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import Note from './../components/Note/Note';

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <Note/>
    </div>
  )
}

export { HomePage }