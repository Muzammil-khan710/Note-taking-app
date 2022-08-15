import React, {useState} from 'react'
import JoditEditor from "jodit-react"
import { ColorTraySvg } from '../../utils/SVG/Svg'
import "./note.css"

const Note = () => {

    const [data, setData] = useState({
        title: "",
        description: "",
        tags: "", 
        priority: "",
    })

    const [bgColor, setBgColor] = useState("")

  return (
    <div className='note-editor' style={{backgroundColor: bgColor}}>
        <input type="text" className='note-title' placeholder="Title" onChange={(e) => setData({...data, title: e.target.value})}/>
        <JoditEditor onChange={(e) => setData({...data, description: e})}/>
        <div className='btn-container'>
        <button className='btn' onClick={() => console.log(data)}>Add</button>

        <button className='btn'><ColorTraySvg/>
        <select className='select' onChange={(e) => setBgColor(e.target.value) }>
            <option hidden value="">Choose color</option>
            <option value="#89ebed">blue</option>
            <option value="#fff8c6">yellow</option>
            <option value="#ffc0cb">pink</option>
            <option value="#ddd6f3">purple</option>
            <option value="#fad6c4">orange</option>
        </select>
        </button>

        <select className='select' name="" id="" onChange={(e) => setData({...data, tags: e.target.value})}>
            <option hidden>Choose Tag</option>
            <option value="Work">Work</option>
            <option value="Gym">Gym</option>
            <option value="Health">Health</option>
            <option value="Teams">Teams</option>
            <option value="Chores">Chores</option>
            <option value="Creativity">Creativity</option>
        </select>

        <select className='select' name="" id="" onChange={(e) => setData({...data, priority: e.target.value})}>
            <option hidden>Choose Priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
        </select>
        </div>
    </div>
  )
}

export { Note }